// 1. Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

// TODO: Add your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOFwDHIi3blxE-qYKoavVrlxiooKoohKw",
  authDomain: "ecobite-d7bf3.firebaseapp.com",
  projectId: "ecobite-d7bf3",
  storageBucket: "ecobite-d7bf3.firebasestorage.app",
  messagingSenderId: "26659449470",
  appId: "1:26659449470:web:b45288f48c7550129e462f",
  measurementId: "G-B83324G2W3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { db, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut };
