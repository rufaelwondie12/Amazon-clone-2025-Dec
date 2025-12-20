import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZuaWx6NiHIA4rpWQMyPgXl8qr3wqz268",
  authDomain: "for-presentation-ac7cd.firebaseapp.com",
  projectId: "for-presentation-ac7cd",
  storageBucket: "for-presentation-ac7cd.firebasestorage.app",
  messagingSenderId: "174684633828",
  appId: "1:174684633828:web:722ae5743691ea69a98af1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
