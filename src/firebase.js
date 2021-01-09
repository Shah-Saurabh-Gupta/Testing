// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBZkVsJiLYgo3-sge76iUuY9GIZ4lDF7PI",
    authDomain: "todo-app-cp-69887.firebaseapp.com",
   // databaseURL: "https://todo-app-cp.firebaseio.com",
    projectId: "todo-app-cp-69887",
    storageBucket: "todo-app-cp-69887.appspot.com",
    messagingSenderId: "712740506496",
    appId: "1:712740506496:web:30eab2c9595edc540c0f65",
    measurementId: "G-EN5FX8T22W"



});

const db = firebaseApp.firestore();
export default db;