/* eslint-disable prettier/prettier */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import BadApiError from './BadApiError';
import PollsButton from '../atoms/PollsButton';
import { action } from '@storybook/addon-actions';

const retryButton = <PollsButton title="Retry" onPress={action('On retry press')} />

storiesOf('BadApiError', module)
    .add('default', () => (
        <BadApiError retryButton={retryButton} />
    ));