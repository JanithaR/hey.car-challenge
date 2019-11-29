/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../resources/colors';
import Dimensions from '../resources/dimensions';

const getContainerStyle = (highlighted) => {
    if (highlighted) {
        return StyleSheet.flatten([styles.container, styles.containerHighlighted]);
    }

    return styles.container;
};

const Choice = ({ pollsRadioButton, label, highlighted }) => {
    return (
        <View style={getContainerStyle(highlighted)}>

            {pollsRadioButton}

            <Text style={styles.text}>{label}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primaryColorLighter,
    },
    containerHighlighted: {
        backgroundColor: Colors.primaryColorLight
    },
    text: {
        color: Colors.normalFontColor,
        fontSize: Dimensions.normalFontSize,
    },
});

Choice.propTypes = {
    pollsRadioButton: PropTypes.element.isRequired,
    label: PropTypes.string.isRequired,
    highlighted: PropTypes.bool
};

Choice.defaultProps = {
    highlighted: false
};

export default Choice;
