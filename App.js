import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, ActivityIndicator, Alert, StatusBar } from 'react-native';
import HomeScreen from './src/pages/HomeScreen';
import LoginScreen from './src/pages/LoginScreen';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import SecondButton from './src/components/SecondButton';
import Kapsam1 from './src/kapsamlar/Kapsam1';
import Kapsam2 from './src/kapsamlar/Kapsam2';
import Kapsam3 from './src/kapsamlar/Kapsam3';
import CategoryA from './src/kategoriler/CategoryA';
import CategoryB from './src/kategoriler/CategoryB';
import CategoryC from './src/kategoriler/CategoryC';
import CategoryD from './src/kategoriler/CategoryD';
import CategoryE from './src/kategoriler/CategoryE';
import CategoryF from './src/kategoriler/CategoryF';
import CategoryG from './src/kategoriler/CategoryG';
import CategoryH from './src/kategoriler/CategoryH';
import CategoryJ from './src/kategoriler/CategoryJ';
import CategoryK from './src/kategoriler/CategoryK';
import CategoryL from './src/kategoriler/CategoryL';
import CategoryM from './src/kategoriler/CategoryM';
import CategoryN from './src/kategoriler/CategoryN';
import CategoryO from './src/kategoriler/CategoryO';
import CategoryP from './src/kategoriler/CategoryP';
import CategoryR from './src/kategoriler/CategoryR';
import FontAwesome from 'react-native-vector-icons/FontAwesome';




const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      Alert.alert('Çıkış Yapıldı', 'Başarıyla çıkış yaptınız.');
    } catch (error) {
      Alert.alert('Çıkış Hatası', error.message);
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        initialRouteName="Ana Sayfa"
        screenOptions={{
          headerStyle: { backgroundColor: '#ffffff' },
          headerTintColor: 'green',
          headerTitleStyle: { fontWeight: 'bold' },
          drawerStyle: { backgroundColor: '#ffffff' },
        }}
      >
        <Drawer.Screen
          name="Ana Sayfa"
          component={HomeScreen}
          options={{
            headerRight: () => (
              <SecondButton onPress={handleSignOut}><FontAwesome name="sign-out" size={30} color="red" /></SecondButton>
            ),
          }}
        />
        <Drawer.Screen name="Kapsam 1" component={Kapsam1} />
        <Drawer.Screen name="Kapsam 2" component={Kapsam2} />
        <Drawer.Screen name="Kapsam 3" component={Kapsam3} />
      </Drawer.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="auto" />
      <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'white' },
        headerTintColor: 'green',
        headerTitleStyle: { fontWeight: 'bold' },
        drawerStyle: { backgroundColor: '#ffffff' },
      }}>
        {user ? (
          <>
            <Stack.Screen
              name="Geri"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Üretim Süreçlerinde Kullanılan Yakıt Emisyonları" component={CategoryA} />
            <Stack.Screen name="Isıtma ve Soğutmada Kullanılan Diğer Gazlar" component={CategoryB} />
            <Stack.Screen name="Şirket Araçlarının Yakıt Tüketimi" component={CategoryC} />
            <Stack.Screen name="Elektrik Tüketim Emisyonu" component={CategoryD} />
            <Stack.Screen name="Isıtma ve Soğutmada Kullanılan Yakıt Türleri" component={CategoryE} />
            <Stack.Screen name="Taşımacılık" component={CategoryF} />
            <Stack.Screen name="İşe Gidiş - Geliş" component={CategoryG} />
            <Stack.Screen name="Müşterilerin Tesise Gelişi" component={CategoryH} />
            <Stack.Screen name="İş Seyahatleri" component={CategoryJ} />
            <Stack.Screen name="Sarf Malzeme" component={CategoryK} />
            <Stack.Screen name="Duran Varlık" component={CategoryL} />
            <Stack.Screen name="Atık Yönetimi" component={CategoryM} />
            <Stack.Screen name="Satın Alınan Hizmetler" component={CategoryN} />
            <Stack.Screen name="Satışı Yapılan Ürünlerin Kullanımı Kaynaklı" component={CategoryO} />
            <Stack.Screen name="Kiraya Verilen Ekipmanların Kullanımı Kaynaklı" component={CategoryP} />
            <Stack.Screen name="Satışı Yapılan Ürün Kaynaklı" component={CategoryR} />
          </>
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
