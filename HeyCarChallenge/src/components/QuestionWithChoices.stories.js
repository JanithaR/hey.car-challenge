/* eslint-disable prettier/prettier */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Choice from './Choice';
import Question from './Question';
import QuestionWithChoices from './QuestionWithChoices';
import PollsRadioButton from '../atoms/PollsRadioButton';

const mockQuestion = <Question text={text('Text', 'This is a question')} />;

const mockChoices = [
    <Choice
        label="Choice 1"
        pollsRadioButton={<PollsRadioButton value={'Choice 1'} />}
        key="Choice 1"
    />,
    <Choice
        label="Choice 2"
        pollsRadioButton={<PollsRadioButton value={'Choice 2'} />}
        key="Choice 2"
    />
];

storiesOf('QuestionWithChoices', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <QuestionWithChoices
            question={mockQuestion}
            choices={mockChoices}
        />
    ));