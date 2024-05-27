// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDv25fvUS4fAZc9OfD3uHrkEK8beF2HVBY",
  authDomain: "kwaralegend-37492.firebaseapp.com",
  projectId: "kwaralegend-37492",
  storageBucket: "kwaralegend-37492.appspot.com",
  messagingSenderId: "767958093760",
  appId: "1:767958093760:web:99187567a7d18f1b62c225",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage}
