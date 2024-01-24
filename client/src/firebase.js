// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogsite-98a64.firebaseapp.com",
  projectId: "blogsite-98a64",
  storageBucket: "blogsite-98a64.appspot.com",
  messagingSenderId: "911841153392",
  appId: "1:911841153392:web:13cd0608303a6622267fb5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
