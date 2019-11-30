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

const getTextStyle = (highlighted) => {
    if (highlighted) {
        return StyleSheet.flatten([styles.text, styles.textHighlighted]);
    }

    return styles.text;
};

const getVoteCountStyle = (highlighted) => {
    if (highlighted) {
        return StyleSheet.flatten([styles.voteCount, styles.voteCountHighlighted]);
    }

    return styles.voteCount;
};

const renderVoteCount = ({ voteCountVisible, highlighted, voteCount }) => {
    if (voteCountVisible) {
        return (
            <Text style={getVoteCountStyle(highlighted)}>

                {voteCount}

            </Text>
        );
    }

    return null;
};

const Choice = ({ pollsRadioButton, label, highlighted, voteCount, voteCountVisible }) => {
    return (
        <View style={getContainerStyle(highlighted)}>

            {pollsRadioButton}

            <View style={styles.textWrapper}>

                <Text
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                    style={getTextStyle(highlighted)}
                >

                    {label}

                </Text>

            </View>

            {renderVoteCount({ voteCount, voteCountVisible, highlighted })}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        marginTop: 5,
        marginBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
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
    textHighlighted: {
        fontWeight: 'bold',
        color: Colors.primaryColor
    },
    textWrapper: {
        flex: 1
    },
    voteCount: {
        marginRight: 10,
        color: Colors.normalFontColor,
        fontSize: Dimensions.normalFontSize,
    },
    voteCountHighlighted: {
        fontWeight: 'bold',
        color: Colors.primaryColor,
        fontSize: Dimensions.normalFontSize + 2
    }
});

Choice.propTypes = {
    pollsRadioButton: PropTypes.element.isRequired,
    label: PropTypes.string.isRequired,
    highlighted: PropTypes.bool,
    voteCount: PropTypes.number,
    voteCountVisible: PropTypes.bool,
};

Choice.defaultProps = {
    highlighted: false,
    voteCount: 0,
    voteCountVisible: false,
};

export default Choice;
