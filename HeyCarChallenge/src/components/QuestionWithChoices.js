/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const QuestionWithChoices = ({ question, choices }) => {
    return (
        <View>

            {question}

            {choices}

        </View>
    );
};

QuestionWithChoices.propTypes = {
    question: PropTypes.element.isRequired,
    choices: PropTypes.element.isRequired,
};

export default QuestionWithChoices;