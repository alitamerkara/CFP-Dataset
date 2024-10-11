import React, { useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import firebase from 'firebase/app';
import 'firebase/auth';

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = ({ navigation }) => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: 'YOUR_WEB_CLIENT_ID', // Buraya Google Cloud Console'dan aldığın web client ID'yi koymalısın.
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      firebase.auth().signInWithCredential(credential)
        .then(() => {
          navigation.navigate('Home');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Button
        title="Google ile Giriş Yap"
        disabled={!request}
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
