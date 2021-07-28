import { createDrawerNavigator } from "@react-navigation/drawer";
import React, {Component} from 'react';
import { HomeStackNavigator } from "../Navigation/StackNavigator";


import Article from "../Screens/Article";
import  Test from "../Screens/Test";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Test" component={Test} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;