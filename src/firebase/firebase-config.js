import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAwf7AGOd9CBWBd9VTEYemTOsZ5g6q_qI",
  authDomain: "react-apps-48113.firebaseapp.com",
  projectId: "react-apps-48113",
  storageBucket: "react-apps-48113.appspot.com",
  messagingSenderId: "1048969950127",
  appId: "1:1048969950127:web:3391e66a172dc78d3cf55a",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
