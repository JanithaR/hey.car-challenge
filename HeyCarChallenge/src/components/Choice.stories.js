/* eslint-disable prettier/prettier */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Choice from './Choice';
import PollsRadioButton from '../atoms/PollsRadioButton';

storiesOf('Choice', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Choice
            label={text('Label', 'This is a choice')}
            pollsRadioButton={<PollsRadioButton value={'Value'} />}
            highlighted={boolean('Hightlighted', false)}
        />
    ));