/* eslint-disable prettier/prettier */
import React from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';

const PollsButton = ({ title, onPress, disabled, testID }) => {
    return (
        <Button
            title={title}
            testID={testID}
            onPress={onPress}
            disabled={disabled}
        />
    );
};

PollsButton.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    testID: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

PollsButton.defaultProps = {
    disabled: false
};

export default PollsButton;