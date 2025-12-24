import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCZuaWx6NiHIA4rpWQMyPgXl8qr3wqz268",
  // authDomain: "for-presentation-ac7cd.firebaseapp.com",
  // projectId: "for-presentation-ac7cd",
  // storageBucket: "for-presentation-ac7cd.firebasestorage.app",
  // messagingSenderId: "174684633828",
  // appId: "1:174684633828:web:722ae5743691ea69a98af1",

  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
