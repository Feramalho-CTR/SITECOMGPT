// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDptgKfoB7Z-2_f7uIIwruWVYsIe05nwVw",
    authDomain: "aulas-qi.firebaseapp.com",
    databaseURL: "https://aulas-qi-default-rtdb.firebaseio.com",
    projectId: "aulas-qi",
    storageBucket: "aulas-qi.firebasestorage.app",
    messagingSenderId: "643630032322",
    appId: "1:643630032322:web:4bf009f19d957c8a67225b",
    measurementId: "G-M2FPLH5RW2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export { app, analytics, db };