import { initializeApp, getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore"; 

// Firebase konfigürasyonu
const firebaseConfig = {
  apiKey: "AIzaSyAtwuXNq4cvHkq-I47YAC5YHAeuVh-1k7E",
  authDomain: "cfp-dataset-21f8f.firebaseapp.com",
  projectId: "cfp-dataset-21f8f",
  storageBucket: "cfp-dataset-21f8f.appspot.com",
  messagingSenderId: "682326026564",
  appId: "1:682326026564:web:760efacc4a1a58af5b4f11",
  measurementId: "G-4P7EY8N49F"
};

// Firebase'i sadece eğer başlatılmadıysa başlat
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// AsyncStorage ile oturum kalıcılığını sağla
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Firestore'u başlat
const db = getFirestore(app);

export { auth, db };
