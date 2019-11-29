/* eslint-disable prettier/prettier */
import React from 'react';
import { RadioButton } from 'react-native-paper';
import PropTypes from 'prop-types';

const PollsRadioButtonGroup = ({ choices, onValueChange, value }) => {
    return (
        <RadioButton.Group onValueChange={onValueChange} value={value}>

            {choices}

        </RadioButton.Group>
    );
};

PollsRadioButtonGroup.propTypes = {
    choices: PropTypes.arrayOf(PropTypes.element).isRequired,
    onValueChange: PropTypes.func.isRequired,
    value: PropTypes.string,
};

PollsRadioButtonGroup.defaultValues = {
    value: '',
};

export default PollsRadioButtonGroup;
