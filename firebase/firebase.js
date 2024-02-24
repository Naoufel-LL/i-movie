import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import { collection, updateDoc,doc } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfQNWDfxwCiVc7c-IkSWJE8JB26vpeoSA",
  authDomain: "mycinema-b3290.firebaseapp.com",
  projectId: "mycinema-b3290",
  storageBucket: "mycinema-b3290.appspot.com",
  messagingSenderId: "410220312428",
  appId: "1:410220312428:web:17c0b12990db0a2593a549",
  measurementId: "G-VVJBNDC8HR"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db,firebase}