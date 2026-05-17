// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgmVjT0cvSFV6P-Y1paT3Mh-tfMCIEkf8",
  authDomain: "weather-station-6b498.firebaseapp.com",
  databaseURL: "https://weather-station-6b498-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "weather-station-6b498",
  storageBucket: "weather-station-6b498.firebasestorage.app",
  messagingSenderId: "63681084352",
  appId: "1:63681084352:web:6d981e045fcaf3d3b3e625",
  measurementId: "G-Z3W3BRZJ8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);