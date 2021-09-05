// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyD6tNF_AS6kWHVsAszTfyecrBJkUMroU2Y",
    authDomain: "ask-question-86029.firebaseapp.com",
    projectId: "ask-question-86029",
    storageBucket: "ask-question-86029.appspot.com",
    messagingSenderId: "289122297478",
    appId: "1:289122297478:web:de030c2fbb03067fc8d307",
    measurementId: "G-1SSDTC6546"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  export default db;