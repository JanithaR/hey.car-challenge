/* eslint-disable prettier/prettier */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import PollsRadioButton from './PollsRadioButton';
import { optionsKnob as options } from '@storybook/addon-knobs';

const statusValues = {
    checked: 'checked',
    unchecked: 'unchecked',
};

const statusOptions = {
    display: 'inline-radio'
};

storiesOf('PollsRadioButton', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <PollsRadioButton
            value={text('Value', 'Value')}
            disabled={boolean('Disabled', false)}
            status={options('Status', statusValues, statusValues.unchecked, statusOptions)}
        />
    ))
    .add('unchecked', () => (
        <PollsRadioButton
            value={'Value'}
            disabled={false}
            status={statusValues.unchecked}
        />
    ))
    .add('checked', () => (
        <PollsRadioButton
            value={'Value'}
            disabled={false}
            status={statusValues.checked}
        />
    ))
    .add('disabled unchecked', () => (
        <PollsRadioButton
            value={'Value'}
            disabled={true}
            status={statusValues.unchecked}
        />
    ))
    .add('disabled checked', () => (
        <PollsRadioButton
            value={'Value'}
            disabled={true}
            status={statusValues.checked}
        />
    ));