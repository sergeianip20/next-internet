// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7ye2AG-6OEw3cwOgL8V2NZp3Tja_rgeQ",
    authDomain: "saitvali-b3b4d.firebaseapp.com",
    projectId: "saitvali-b3b4d",
    storageBucket: "saitvali-b3b4d.appspot.com",
    messagingSenderId: "132417151607",
    appId: "1:132417151607:web:64dbd75a4a00a00a6c5c72",
    measurementId: "G-6L69BJ71HN"
};

// Initialize Firebase

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
export const db = getFirestore(firebase_app)