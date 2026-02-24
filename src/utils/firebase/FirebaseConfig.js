// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaapLMQpiCCyLz7nxWawwiB4xEqkRe4Zo",
  authDomain: "netflix-gpt-fe989.firebaseapp.com",
  projectId: "netflix-gpt-fe989",
  storageBucket: "netflix-gpt-fe989.firebasestorage.app",
  messagingSenderId: "736106706713",
  appId: "1:736106706713:web:55cc73b2cb8a94540ab788"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);