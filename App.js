import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/utils/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#F13854'} />
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
