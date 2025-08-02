// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAngSnNtgt-JoFZgJyLHWH2rXrLcz8_vwQ",
  authDomain: "trackdiggers-votes.firebaseapp.com",
  projectId: "trackdiggers-votes",
  storageBucket: "trackdiggers-votes.firebasestorage.app",
  messagingSenderId: "1060800832684",
  appId: "1:1060800832684:web:a82914d24fffd6c29b6b09",
  measurementId: "G-DFDMNME3MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // 👈 Connexion à Firestore

export { db }; // 👈 On exporte uniquement ce dont on a besoin