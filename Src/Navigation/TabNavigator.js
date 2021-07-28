import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Components/Home';

import Create from '../Components/Create';
import Profile from '../Components/Profile';
import TabBar from '../Components/TabBar';
import ProfileNavigator from './ProfileNavigator';

import HomeScreen from '../Screens/Home';
const Tab = createBottomTabNavigator();

const TabNavigator = ({navigation}) => {
  return (

    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        initialParams={{ icon: 'home' ,color:'orange' }}
      />
      <Tab.Screen
        name='Create'
        component={Create}
        initialParams={{ icon: 'plus' }}
        options={{headerShown: false}}  />
      <Tab.Screen
        name='calendar'
        component={Profile}
        initialParams={{ icon: 'calendar' }}
      />
      
    </Tab.Navigator>

  );
};

export default TabNavigator;