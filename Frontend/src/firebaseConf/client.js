import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBwkWqcGuknTjcJmpPJi5VML4xJiYdI0qc",
    authDomain: "netsysinformation.firebaseapp.com",
    projectId: "netsysinformation",
    storageBucket: "netsysinformation.appspot.com",
    messagingSenderId: "716276775610",
    appId: "1:716276775610:web:ad7e53276aba855c34e083",
    measurementId: "G-2VLRHNVP84"
  };

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)