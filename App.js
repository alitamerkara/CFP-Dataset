import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/components/HomeScreen';
import CategoryA from './src/components/CategoryA';
import CategoryB from './src/components/CategoryB';
import LoginScreen from './LoginScreen';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'react-native-gesture-handler';

// Firebase konfigürasyonu
const firebaseConfig = {
  apiKey: "AIzaSyCm3nfQ0YKXcs0goBcPgmjAaDRu0z6Y_5g",
  authDomain: "cfp-dataset.firebaseapp.com",
  projectId: "cfp-dataset",
  storageBucket: "cfp-dataset.appspot.com",
  messagingSenderId: "433833694611",
  appId: "1:433833694611:android:f4bb2876dbd6c7fce0c466",
};

// Firebase'i başlat
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="CategoryA" component={CategoryA} />
        <Drawer.Screen name="CategoryB" component={CategoryB} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
