import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDo46agVXiPIeclST-W0kPJ2u5lSR0g3r4",
    authDomain: "react-todo-app-6a594.firebaseapp.com",
    projectId: "react-todo-app-6a594",
    storageBucket: "react-todo-app-6a594.appspot.com",
    messagingSenderId: "253853272340",
    appId: "1:253853272340:web:b7c24bb59a20a1f244da01",
    measurementId: "G-4QE8R0QXZH"
  });

  const db=firebaseApp.firestore();

  export {db}