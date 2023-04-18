// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn0xZE0CBcW1CkQvBxWQDde1cWJb6YZq0",
  authDomain: "i-m-xz.firebaseapp.com",
  projectId: "i-m-xz",
  storageBucket: "i-m-xz.appspot.com",
  messagingSenderId: "635163135143",
  appId: "1:635163135143:web:057998c3f84f27b8545f82",
  measurementId: "G-BREEQRK652",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
