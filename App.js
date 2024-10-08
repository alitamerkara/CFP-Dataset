import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/components/HomeScreen';
import CategoryA from './src/components/CategoryA';
import CategoryB from './src/components/CategoryB';
import CategoryC from './src/components/CategoryC';
import CategoryD from './src/components/CategoryD';
import { ImageBackground, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#5CBF7A' },
          headerTintColor: '#FFFFFF',
          drawerStyle: {
            backgroundColor: '#64d185',
          },
          drawerLabelStyle: {
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: 16,
          },
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Category A" component={CategoryA} />
        <Drawer.Screen name='Category B' component={CategoryB} />
        <Drawer.Screen name='Category C' component={CategoryC} />
        <Drawer.Screen name='Category D' component={CategoryD} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
      flex: 1,
      width: '100%',
      height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(245, 245, 245, 0.7)', 
    padding: 20,
},
});