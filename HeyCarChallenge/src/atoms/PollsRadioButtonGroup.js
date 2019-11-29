/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import PropTypes from 'prop-types';

const PollsRadioButtonGroup = ({ choices, onValueChange, value }) => {
    return (
        <View style={styles.containerStyle}>

            <RadioButton.Group onValueChange={onValueChange} value={value}>

                {choices}

            </RadioButton.Group>

        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        paddingTop: 5,
        paddingBottom: 5
    }
});

PollsRadioButtonGroup.propTypes = {
    choices: PropTypes.arrayOf(PropTypes.element).isRequired,
    onValueChange: PropTypes.func.isRequired,
    value: PropTypes.string,
};

PollsRadioButtonGroup.defaultValues = {
    value: '',
};

export default PollsRadioButtonGroup;
