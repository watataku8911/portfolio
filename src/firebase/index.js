import firebase from "firebase/app"
import "firebase/firestore";
import firebaseConfig from "./firebase.config"

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();