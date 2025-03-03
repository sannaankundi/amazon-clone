// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpGHsaC_akmliEz27w6cXjp7oyxmTGce8",
  authDomain: "clone-390c7.firebaseapp.com",
  projectId: "clone-390c7",
  storageBucket: "clone-390c7.appspot.com",
  messagingSenderId: "490459113908",
  appId: "1:490459113908:web:c31062cd3faeb51d582ae1",
  measurementId: "G-M3ZPCWYL7L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db, onAuthStateChanged };
