import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/components/HomeScreen';
import CategoryA from './src/components/CategoryA';
import CategoryB from './src/components/CategoryB';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Category A" component={CategoryA} />
        <Drawer.Screen name='Category B' component={CategoryB} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}