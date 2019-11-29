/* eslint-disable prettier/prettier */
import React from 'react';
import { RadioButton } from 'react-native-paper';
import PropTypes from 'prop-types';

const PollsRadioButton = ({ value, disabled }) => {
    return <RadioButton value={value} disabled={disabled} />;
};

export default PollsRadioButton;

PollsRadioButton.propTypes = {
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool
};

PollsRadioButton.defaultProps = {
    disabled: false
};
