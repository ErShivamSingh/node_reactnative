import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Login from '../screens/Login';
import Home from '../screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterUser from '../screens/RegisterUser';
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  const screens = [
    {name: 'Login', componentName: Login},
    {name: 'Home', componentName: Home},
    {name: 'RegisterUser', componentName: RegisterUser},
  ];
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {screens.map((item, index) => (
        <Stack.Screen
          key={index.toString()}
          name={item.name}
          component={item.componentName}
        />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
