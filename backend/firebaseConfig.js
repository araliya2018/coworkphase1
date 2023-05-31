import firebase from 'firebase/compat/app';
import  'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDQeGajnL2Q48OBh1qLuA-IqyzLuqY7PpE",
    authDomain: "crewareclientapp.firebaseapp.com",
    projectId: "crewareclientapp",
    storageBucket: "crewareclientapp.appspot.com",
    messagingSenderId: "15555731092",
    appId: "1:15555731092:web:b9d5fc44f8f37ebe819e81"
  };
  // Use this to initialize the firebase App
const firebaseApp =firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default db;