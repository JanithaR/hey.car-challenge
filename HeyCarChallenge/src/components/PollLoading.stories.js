/* eslint-disable prettier/prettier */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import PollLoading from './PollLoading';

storiesOf('PollLoading', module)
    .add('default', () => (
        <PollLoading />
    ));