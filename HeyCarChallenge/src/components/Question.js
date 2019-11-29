/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../resources/colors';
import Dimensions from '../resources/dimensions';

const Question = ({ text }) => {
    return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
    text: {
        color: Colors.largeFontColor,
        fontSize: Dimensions.largeFontSize,
    },
});

Question.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Question;
