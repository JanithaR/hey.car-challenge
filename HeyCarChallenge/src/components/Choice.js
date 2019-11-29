/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../resources/colors';
import Dimensions from '../resources/dimensions';

const Choice = ({ pollsRadioButton, label }) => {
    return (
        <View style={styles.container}>

            {pollsRadioButton}

            <Text style={styles.text}>{label}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: Colors.normalFontColor,
        fontSize: Dimensions.normalFontSize,
    },
});

Choice.propTypes = {
    pollsRadioButton: PropTypes.element.isRequired,
    label: PropTypes.string.isRequired,
};

export default Choice;
