/* eslint-disable prettier/prettier */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import PollsRadioButton from './PollsRadioButton';
import { optionsKnob as options } from '@storybook/addon-knobs';
import { RadioButtonStatus } from '../Enums';

const statusOptions = {
    display: 'inline-radio'
};

storiesOf('PollsRadioButton', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <PollsRadioButton
            value={text('Value', 'Value')}
            disabled={boolean('Disabled', false)}
            status={options('Status', RadioButtonStatus, RadioButtonStatus.UNCHEKCED, statusOptions)}
        />
    ))
    .add('unchecked', () => (
        <PollsRadioButton
            value={'Value'}
            disabled={false}
            status={RadioButtonStatus.UNCHEKCED}
        />
    ))
    .add('checked', () => (
        <PollsRadioButton
            value={'Value'}
            disabled={false}
            status={RadioButtonStatus.CHECKED}
        />
    ))
    .add('disabled unchecked', () => (
        <PollsRadioButton
            value={'Value'}
            disabled={true}
            status={RadioButtonStatus.UNCHEKCED}
        />
    ))
    .add('disabled checked', () => (
        <PollsRadioButton
            value={'Value'}
            disabled={true}
            status={RadioButtonStatus.CHECKED}
        />
    ));