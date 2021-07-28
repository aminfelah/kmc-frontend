import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../Components/Profile';

const Stack = createStackNavigator();

const ProfileNavigator = () => {

  return (


    <Stack.Navigator screenOptions={{ headerTransparent: true, title: '' }}>
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>

  );
};

const styles = StyleSheet.create({
  container: { },
});

export default ProfileNavigator;