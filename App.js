import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/components/HomeScreen';
import CategoryA from './src/components/CategoryA';
import CategoryB from './src/components/CategoryB';
import CategoryC from './src/components/CategoryC';
import CategoryD from './src/components/CategoryD';
import { StyleSheet } from 'react-native';
import CategoryE from './src/components/CategoryE';
import CategoryF from './src/components/CategoryF';
import CategoryG from './src/components/CategoryG';
import CategoryH from './src/components/CategoryH';
import CategoriJ from './src/components/CategoryJ';
import CategoriK from './src/components/CategoryK';
import CategoryL from './src/components/CategoryL';
import CategoryM from './src/components/CategoryM';
import CategoryN from './src/components/CategoryN';
import CategoryO from './src/components/CategoryO';
import CategoryP from './src/components/CategoryP';
import CategoryR from './src/components/CategoryR';
import CategoryS from './src/components/CategoryS';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#64d185' },
          headerTintColor: '#FFFFFF',
          drawerStyle: {
            backgroundColor: '#FFFFE0',
          },
          drawerLabelStyle: {
            color: '#64d185',
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
        <Drawer.Screen name='Category E' component={CategoryE} />
        <Drawer.Screen name='Category F' component={CategoryF} />
        <Drawer.Screen name='İşe Gidiş - Geliş' component={CategoryG} />
        <Drawer.Screen name='Müşterilerin Tesise Gelişi' component={CategoryH} />
        <Drawer.Screen name='İş Seyahatleri' component={CategoriJ} />
        <Drawer.Screen name='Category K' component={CategoriK} />
        <Drawer.Screen name='Category L' component={CategoryL} />
        <Drawer.Screen name='Category M' component={CategoryM} />
        <Drawer.Screen name='Satın Alınan Hizmetler Kaynaklı Emisyonlar' component={CategoryN} />
        <Drawer.Screen name='Satışı Yapılan Ürünlerin Kullanımı kaynaklı Emisyonlar' component={CategoryO} />
        <Drawer.Screen name='Kiraya Verilen Ekipmanların Kullanımı Kaynaklı Emisyonlar' component={CategoryP} />
        <Drawer.Screen name='Satışı Yapılan Ürünlerin Kullanım Ömrü Sonrası Bertarafı Kaynaklı Emisyonlar' component={CategoryR} />
        <Drawer.Screen name='Yatırımlar Kaynaklı Emisyonlar' component={CategoryS} />
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
title: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#4CAF50',
  textAlign: 'center',
  padding: 8,
},
});