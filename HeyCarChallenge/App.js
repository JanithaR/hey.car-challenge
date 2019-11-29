/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    View
} from 'react-native';

import Storybook from './storybook';
import Api from './src/Api';
import Config from './src/Config';
import Question from './src/components/Question';
import PollsRadioButton from './src/atoms/PollsRadioButton';
import Choice from './src/components/Choice';
import PollsRadioButtonGroup from './src/atoms/PollsRadioButtonGroup';
import QuestionWithChoices from './src/components/QuestionWithChoices';
import BadApiError from './src/components/BadApiError';
import PollLoading from './src/components/PollLoading';
import PollsButton from './src/atoms/PollsButton';
import PollCompleted from './src/components/PollCompleted';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: [],
            currentQuestion: 0,
            currentChoice: '',
            currentPollDisabled: false,
            badApiError: null
        };
    }

    componentDidMount() {
        this.getQuestions();
    }

    componentDidUpdate(prevProps, prevState) {
        const { currentQuestion } = this.state;

        if (currentQuestion !== prevState.currentQuestion) {
            this.setState({ currentPollDisabled: false });
        }
    }

    getQuestions = async () => {
        try {
            const root = await Api.makeRequest(Config.apiEndpoint);
            const questions = await Api.makeRequest(`${Config.apiEndpoint}${root.questions_url}`);

            this.setState(currentState => {
                return { questions: [...currentState.questions, ...questions] };
            });
        } catch (error) {
            this.setState({ badApiError: error });
        }
    };

    onChoiceChange = value => {
        this.setState(
            { currentChoice: value, currentPollDisabled: true },
            () => {
                setTimeout(() => {
                    this.setState((currentState) => {
                        return { currentQuestion: currentState.currentQuestion + 1 }
                    });
                }, 500);
            }
        );
    };

    renderQuestionWithChoices = ({ question, url, choices }) => {
        const { currentChoice, currentPollDisabled } = this.state;

        const renderedQuestion = <Question text={question} />;

        const renderedChoices = choices.map(choice => {
            const value = choice.choice;
            const renderRadioButton = <PollsRadioButton value={value} disabled={currentPollDisabled} />;

            return <Choice pollsRadioButton={renderRadioButton} label={value} key={choice.choice} />;
        });

        const renderedChoicesGroup = (
            <PollsRadioButtonGroup
                choices={renderedChoices}
                value={currentChoice}
                onValueChange={this.onChoiceChange}
            />
        );

        const renderedQuestionWithChoices = (
            <QuestionWithChoices
                question={renderedQuestion}
                choices={renderedChoicesGroup}
            />
        );

        return renderedQuestionWithChoices;
    };

    renderScreen = (screenContent) => {
        return (
            <>

                <StatusBar barStyle="light-content" />

                <SafeAreaView>

                    <View style={styles.container}>

                        {screenContent}

                    </View>

                </SafeAreaView>

            </>
        );
    };

    render() {
        const { questions, currentQuestion, badApiError } = this.state;

        if (badApiError) {
            const renderedRetryButton = <PollsButton title="Retry" onPress={this.getQuestions} />;

            return this.renderScreen(<BadApiError retryButton={renderedRetryButton} />);
        }

        if (questions.length === 0) {
            return this.renderScreen(<PollLoading />);
        }

        if (questions.length > 0 && currentQuestion < questions.length) {
            const renderedQuestionWithChoices = this.renderQuestionWithChoices(questions[currentQuestion]);

            return this.renderScreen(renderedQuestionWithChoices);
        }

        if (questions.length > 0 && currentQuestion === questions.length) {
            return this.renderScreen(<PollCompleted />);
        }
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
});

export default App;
// export default Storybook;
