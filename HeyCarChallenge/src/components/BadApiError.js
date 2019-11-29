/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const BadApiError = ({ retryButton }) => {
    return (
        <View>

            <Text>Sorry, we could not load the poll</Text>

            {retryButton}

        </View>
    );
};

BadApiError.propTypes = {
    retryButton: PropTypes.element.isRequired
};

export default BadApiError;