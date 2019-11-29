/* eslint-disable prettier/prettier */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, text } from '@storybook/addon-knobs';
import Question from './Question';

storiesOf('Question', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Question
            text={text('Text', 'This is a question')}
        />
    ));