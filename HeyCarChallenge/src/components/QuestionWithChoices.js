/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const QuestionWithChoices = ({ question, choices }) => {
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
        paddingLeft: 20,
        paddingRight: 20
    }
});

QuestionWithChoices.propTypes = {
    question: PropTypes.element.isRequired,
    choices: PropTypes.element.isRequired,
};

export default QuestionWithChoices;