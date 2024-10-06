// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
// Your web app's Firebase configuration
const firebaseConfigTourism = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY_TOURISM,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_TOURISM,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID_TOURISM,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_TOURISM,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID_TOURISM,
  appId: process.env.REACT_APP_FIREBASE_APP_ID_TOURISM,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
