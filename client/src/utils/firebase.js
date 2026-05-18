// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "zenaiinterview.firebaseapp.com",
  projectId: "zenaiinterview",
  storageBucket: "zenaiinterview.firebasestorage.app",
  messagingSenderId: "1039058195663",
  appId: "1:1039058195663:web:2eb01d392d12702b1bd3ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider=new GoogleAuthProvider()

export {auth,provider}

