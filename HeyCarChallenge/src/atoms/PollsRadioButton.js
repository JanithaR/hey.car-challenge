/* eslint-disable prettier/prettier */
import React from 'react';
import { RadioButton } from 'react-native-paper';
import PropTypes from 'prop-types';
import Colors from '../resources/colors';

const PollsRadioButton = ({ value, disabled, status }) => {
    return (
        <RadioButton
            value={value}
            status={status}
            disabled={disabled}
            color={Colors.primaryColor}
            uncheckedColor={Colors.primaryColorLight}
        />
    );
};

export default PollsRadioButton;

PollsRadioButton.propTypes = {
    value: PropTypes.string.isRequired,
    status: PropTypes.string,
    disabled: PropTypes.bool
};

PollsRadioButton.defaultProps = {
    status: 'unchecked',
    disabled: false
};
