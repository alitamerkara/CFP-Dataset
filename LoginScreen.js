import React, { useState } from 'react';
import { View, Button, TextInput, Alert, StyleSheet, Text } from 'react-native';
import { auth } from './firebase'; // firebase.js'yi içe aktar
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Firebase ile giriş işlemi
  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Giriş Başarılı', 'Kullanıcı giriş yaptı!');
      navigation.navigate('Home'); // Giriş başarılıysa 'Home' sayfasına yönlendir
    } catch (error) {
      Alert.alert('Giriş Hatası', error.message);
    }
  };

  // Firebase ile kayıt işlemi
  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Kayıt Başarılı', 'Kullanıcı kaydedildi!');
    } catch (error) {
      Alert.alert('Kayıt Hatası', error.message);
    }
  };

  return (
    <View style={styles.container}>
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
      <Button title="Sign In" onPress={signIn} />
      <Button title="Sign Up" onPress={signUp} />
      {/* Burada bilgilendirme metni veya başka bir metin göstermek isterseniz */}
      <Text style={styles.infoText}>Henüz bir hesabınız yok mu? Kayıt olun.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 12,
  },
  infoText: {
    marginTop: 20,
    color: '#555',
  },
});

export default LoginScreen;
