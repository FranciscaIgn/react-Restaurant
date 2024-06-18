// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD11qVmDei6_Yki95V3q4T4Xflpl_csHtc",
  authDomain: "reservas-4b2fd.firebaseapp.com",
  projectId: "reservas-4b2fd",
  storageBucket: "reservas-4b2fd.appspot.com",
  messagingSenderId: "645995744543",
  appId: "1:645995744543:web:137a5c937da5d5d2f4342a",
  measurementId: "G-98D0RG7H5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
