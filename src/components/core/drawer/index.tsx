import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerNavigatorContent} from './content';
import {Header} from '../header';
import HomeScreen from '../../../screens/home';

const DrawerNavigator = createDrawerNavigator();

export const Drawer = () => {
  return (
    <DrawerNavigator.Navigator
      initialRouteName="Home"
      drawerContent={DrawerNavigatorContent}>
      <DrawerNavigator.Screen
        options={{header: Header}}
        name="Home"
        component={HomeScreen}
      />
    </DrawerNavigator.Navigator>
  );
};
