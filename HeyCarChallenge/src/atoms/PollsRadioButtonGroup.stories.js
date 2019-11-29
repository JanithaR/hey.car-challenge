/* eslint-disable prettier/prettier */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, text } from '@storybook/addon-knobs';
import PollsRadioButtonGroup from './PollsRadioButtonGroup';
import { action } from '@storybook/addon-actions';
import Choice from '../components/Choice';
import PollsRadioButton from './PollsRadioButton';

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

storiesOf('PollsRadioButtonGroup', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <PollsRadioButtonGroup
            value={text('Value', '')}
            choices={mockChoices}
            onValueChange={action('On value changed')}
        />
    ));