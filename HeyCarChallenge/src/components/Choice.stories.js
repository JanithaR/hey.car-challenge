/* eslint-disable prettier/prettier */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Choice from './Choice';
import PollsRadioButton from '../atoms/PollsRadioButton';
import { RadioButtonStatus } from '../Enums';

storiesOf('Choice', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Choice
            label={text('Label', 'This is a choice')}
            pollsRadioButton={<PollsRadioButton value={'Value'} />}
            highlighted={boolean('Hightlighted', false)}
            voteCount={number('Vote count', 99)}
            voteCountVisible={boolean('Vote count visible', false)}
        />
    ))
    .add('not highlighted', () => (
        <Choice
            label={'This is a choice'}
            pollsRadioButton={<PollsRadioButton value={'Value'} />}
            highlighted={false}
        />
    ))
    .add('highlighted', () => (
        <Choice
            label={'This is a choice'}
            pollsRadioButton={<PollsRadioButton value={'Value'} status={RadioButtonStatus.CHECKED} />}
            highlighted={true}
        />
    ))
    .add('not highlighted vote count visible', () => (
        <Choice
            label={'This is a choice'}
            pollsRadioButton={<PollsRadioButton value={'Value'} />}
            highlighted={false}
            voteCountVisible={true}
        />
    ))
    .add('highlighted vote count visible', () => (
        <Choice
            label={'This is a choice'}
            pollsRadioButton={<PollsRadioButton value={'Value'} status={RadioButtonStatus.CHECKED} />}
            highlighted={true}
            voteCountVisible={true}
        />
    ));