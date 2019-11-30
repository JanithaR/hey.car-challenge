/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Poll = ({ question, choices }) => {
    return (
        <View style={styles.containerStyle}>

            {question}

            <ScrollView>

                {choices}

            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    }
});

Poll.propTypes = {
    question: PropTypes.element.isRequired,
    choices: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Poll;