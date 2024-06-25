import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const API_KEY = import.meta.env.VITE_APY_KEY

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "userreservas.firebaseapp.com",
  projectId: "userreservas",
  storageBucket: "userreservas.appspot.com",
  messagingSenderId: "155411726689",
  appId: "1:155411726689:web:1b61aa008c776c84b00520"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

