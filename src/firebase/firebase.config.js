// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOugyHMrDHwt0Fai_yelAc2svnVh8778U",
  authDomain: "fir-concep-2-35e80.firebaseapp.com",
  projectId: "fir-concep-2-35e80",
  storageBucket: "fir-concep-2-35e80.firebasestorage.app",
  messagingSenderId: "14377233653",
  appId: "1:14377233653:web:bc63ade0706983a628e9bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)