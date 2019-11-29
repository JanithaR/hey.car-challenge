/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    StatusBar,
    View
} from 'react-native';

const App: () => React$Node = () => {
    return (
        <>

            <StatusBar barStyle="light-content" />

            <SafeAreaView>

                <View style={styles.container}>

                    <Text>hey.car Challenge</Text>

                </View>

            </SafeAreaView>

        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
});

export default App;
