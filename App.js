import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, ActivityIndicator } from 'react-native';
import HomeScreen from './src/components/HomeScreen';
import LoginScreen from './LoginScreen';
import { auth } from './firebase';
import CategoryA from './src/components/CategoryA';
import CategoryB from './src/components/CategoryB';
import CategoryC from './src/components/CategoryC';
import CategoryD from './src/components/CategoryD';
import CategoryE from './src/components/CategoryE';
import CategoryF from './src/components/CategoryF';
import CategoryG from './src/components/CategoryG';
import CategoryH from './src/components/CategoryH';
import CategoryJ from './src/components/CategoryJ';
import CategoryK from './src/components/CategoryK';
import CategoryL from './src/components/CategoryL';
import CategoryM from './src/components/CategoryM';
import CategoryN from './src/components/CategoryN';
import CategoryO from './src/components/CategoryO';
import CategoryP from './src/components/CategoryP';
import CategoryR from './src/components/CategoryR';
import CategoryS from './src/components/CategoryS';

const Drawer = createDrawerNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => { // Burada auth kullanılıyor
      setUser(user);
      setIsLoading(false);
    });

    return unsubscribe; // Bileşen unmount edildiğinde dinleyiciyi kapat
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? (
        <Drawer.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#d4edda',
            },
            headerTintColor: 'green',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            drawerStyle: {
              backgroundColor: '#ffffff',
            },
          }}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          {/* Diğer bileşenleri buraya ekle */}
          <Drawer.Screen name="CategoryA" component={CategoryA} />
          <Drawer.Screen name="CategoryB" component={CategoryB} />
          <Drawer.Screen name="CategoryC" component={CategoryC} />
          <Drawer.Screen name="CategoryD" component={CategoryD} />
          <Drawer.Screen name="CategoryE" component={CategoryE} />
          <Drawer.Screen name="CategoryF" component={CategoryF} />
          <Drawer.Screen name="CategoryG" component={CategoryG} />
          <Drawer.Screen name="CategoryH" component={CategoryH} />
          <Drawer.Screen name="CategoryJ" component={CategoryJ} />
          <Drawer.Screen name="CategoryK" component={CategoryK} />
          <Drawer.Screen name="CategoryL" component={CategoryL} />
          <Drawer.Screen name="CategoryM" component={CategoryM} />
          <Drawer.Screen name="CategoryN" component={CategoryN} />
          <Drawer.Screen name="CategoryO" component={CategoryO} />
          <Drawer.Screen name="CategoryP" component={CategoryP} />
          <Drawer.Screen name="CategoryR" component={CategoryR} />
          <Drawer.Screen name="CategoryS" component={CategoryS} />
        </Drawer.Navigator>
      ) : (
        <LoginScreen />
      )}
    </NavigationContainer>
  );
}
