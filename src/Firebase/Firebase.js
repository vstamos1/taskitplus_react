import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_SECRET,
  authDomain: "weedeater-8fec2.firebaseapp.com",
  databaseURL: "https://weedeater-8fec2.firebaseio.com",
  projectId: "weedeater-8fec2",
  storageBucket: "weedeater-8fec2.appspot.com",
  messagingSenderId: "465363191425",
  appId: "1:465363191425:web:4c50743fde0f6e6b"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
