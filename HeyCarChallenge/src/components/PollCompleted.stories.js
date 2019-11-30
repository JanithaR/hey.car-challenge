/* eslint-disable prettier/prettier */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import PollCompleted from './PollCompleted';

storiesOf('PollCompleted', module)
    .add('default', () => (
        <PollCompleted />
    ));