/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../resources/colors';
import Dimensions from '../resources/dimensions';

const BadApiError = ({ retryButton }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.text}>Sorry, we could not load the poll</Text>

            {retryButton}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: Dimensions.largeFontSize,
        color: Colors.largeFontColor
    }
});

BadApiError.propTypes = {
    retryButton: PropTypes.element.isRequired
};

export default BadApiError;