/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../resources/colors';
import Dimensions from '../resources/dimensions';

const Question = ({ text }) => {
    return (
        <View style={styles.containerStyle}>

            <Text style={styles.text}>

                {text}

            </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: Colors.largeFontColor,
        fontSize: Dimensions.largeFontSize,
        fontWeight: 'bold'
    },
    containerStyle: {
        paddingTop: 5,
        paddingBottom: 5
    }
});

Question.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Question;
