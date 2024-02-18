// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useState, useEffect } from 'react';

import 'firebase/database';
import { getDatabase, ref, onValue } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLycLa9YcfXDB6EYleynEfxiowVGfb0oA",
  authDomain: "vite-project-4dcf8.firebaseapp.com",
  databaseURL: "https://vite-project-4dcf8-default-rtdb.firebaseio.com",
  projectId: "vite-project-4dcf8",
  storageBucket: "vite-project-4dcf8.appspot.com",
  messagingSenderId: "76185407780",
  appId: "1:76185407780:web:a0387c4ea6fcbc09dea3b1",
  measurementId: "G-V6NFWZ2WCL"
};



const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export { firebaseApp, database };