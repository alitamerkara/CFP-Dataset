import React, { useState } from 'react';
import { View, TextInput, Alert, StyleSheet, Text, ImageBackground } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import PrimaryButton from './src/components/PrimaryButton';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Giriş Hatası', 'Lütfen email ve şifre girin.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Giriş Başarılı', 'Kullanıcı giriş yaptı!');
      navigation.navigate('Home');
    } catch (error) {
      console.log('Firebase error:', error);
      // Alert.alert('Giriş Hatası', error.message);
    }
  };

  return (
    <ImageBackground source={require('./assets/mainBg.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>CFP Veri Seti</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <PrimaryButton onPress={handleSignIn}>Giriş Yap</PrimaryButton>
        <Text style={styles.subTitle}>Made by <Text style={{fontStyle:"italic", fontWeight:"500"}}>Ahmet Burak Erdemir</Text></Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(245, 245, 245, 0.7)', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'green',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  subTitle: {
    fontSize:10,
    marginTop: 15,
    color: 'green',
  },
});

export default LoginScreen;
