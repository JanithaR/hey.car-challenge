/* eslint-disable prettier/prettier */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import PollsButton from './PollsButton';

storiesOf('PollsButton', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <PollsButton
            title={text('Title', 'This is a button')}
            disabled={boolean('Disabled', false)}
            onPress={action('Button pressed')}
        />
    ))
    .add('disabled', () => (
        <PollsButton
            title={'This is a button'}
            disabled={true}
            onPress={action('Button pressed')}
        />
    ));