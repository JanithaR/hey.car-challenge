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
import Poll from './src/components/Poll';
import BadApiError from './src/components/BadApiError';
import PollLoading from './src/components/PollLoading';
import PollsButton from './src/atoms/PollsButton';
import PollCompleted from './src/components/PollCompleted';
import { RadioButtonStatus } from './src/Enums';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: [],
            currentQuestion: 0,
            currentChoice: '',
            badApiError: null
        };
    }

    componentDidMount() {
        this.getQuestions();
    }

    componentDidUpdate(prevProps, prevState) {
        const { currentChoice } = this.state;

        if (currentChoice !== prevState.currentChoice && currentChoice) {
            this.castVote(currentChoice);
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

    castVote = async (voteUrl) => {
        try {
            const response = await Api.makeRequest(`${Config.apiEndpoint}${voteUrl}`);

            if (response) {
                setTimeout(() => {
                    this.setState((currentState) => {
                        return {
                            currentQuestion: currentState.currentQuestion + 1,
                            currentChoice: ''
                        }
                    });
                }, 1000); // show poll results for a second
            }
        } catch (error) {
            this.setState({ badApiError: error });
        }
    };

    onChoiceChange = value => {
        const { currentChoice } = this.state;

        if (!currentChoice) {
            this.setState({ currentChoice: value });
        }
    };

    renderPoll = ({ question, choices }) => {
        const { currentChoice } = this.state;

        const renderedQuestion = <Question text={question} />;

        const renderedChoices = choices.map(choice => {
            const url = choice.url;

            let highlighted = false;
            let status = RadioButtonStatus.UNCHEKCED;
            let voteCountVisible = false;

            if (currentChoice) {
                voteCountVisible = true;
            }

            if (url === currentChoice) {
                highlighted = true;
                status = RadioButtonStatus.CHECKED;
            }

            const renderRadioButton = (
                <PollsRadioButton
                    value={url}
                    status={status}
                />
            );

            return (
                <Choice
                    key={url}
                    label={choice.choice}
                    voteCount={choice.votes}
                    highlighted={highlighted}
                    pollsRadioButton={renderRadioButton}
                    voteCountVisible={voteCountVisible}
                />
            );
        });

        const renderedChoicesGroup = (
            <PollsRadioButtonGroup
                choices={renderedChoices}
                value={currentChoice}
                onValueChange={this.onChoiceChange}
            />
        );

        const renderedPoll = (
            <Poll
                question={renderedQuestion}
                choices={renderedChoicesGroup}
            />
        );

        return renderedPoll;
    };

    renderScreen = (screenContent) => {
        return (
            <>

                <StatusBar barStyle="light-content" />

                <SafeAreaView style={styles.safeAreaView}>

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
            const renderedPoll = this.renderPoll(questions[currentQuestion]);

            return this.renderScreen(renderedPoll);
        }

        if (questions.length > 0 && currentQuestion === questions.length) {
            return this.renderScreen(<PollCompleted />);
        }
    }
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1
    },
    container: {
        flex: 1
    }
});

export default App;
// export default Storybook;
