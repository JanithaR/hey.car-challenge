/* eslint-disable prettier/prettier */
import React from 'react';
import { RadioButton } from 'react-native-paper';
import PropTypes from 'prop-types';
import Colors from '../resources/colors';
import { RadioButtonStatus } from '../Enums';

const PollsRadioButton = ({ value, disabled, status, testID }) => {
    return (
        <RadioButton
            value={value}
            testID={testID}
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
    testID: PropTypes.string.isRequired,
    status: PropTypes.string,
    disabled: PropTypes.bool
};

PollsRadioButton.defaultProps = {
    status: RadioButtonStatus.UNCHEKCED,
    disabled: false
};
