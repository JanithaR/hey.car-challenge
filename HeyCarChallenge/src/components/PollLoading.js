/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Colors from '../resources/colors';
import Dimensions from '../resources/dimensions';

const PollLoading = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.text}>Loading poll...</Text>

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

export default PollLoading;