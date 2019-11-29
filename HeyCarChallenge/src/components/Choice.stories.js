/* eslint-disable prettier/prettier */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Choice from './Choice';
import pollsRadioButton from '../atoms/PollsRadioButton.stories';

storiesOf('Choice', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Choice
            label={text('Label', 'This is a choice')}
            pollsRadioButton={pollsRadioButton}
            highlighted={boolean('Hightlighted', false)}
        />
    ));