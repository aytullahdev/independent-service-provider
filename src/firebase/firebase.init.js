// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIFmdQiK_auaHf6CjL62ZutwAxggxxbRs",
  authDomain: "instructor-b4532.firebaseapp.com",
  projectId: "instructor-b4532",
  storageBucket: "instructor-b4532.appspot.com",
  messagingSenderId: "813130190644",
  appId: "1:813130190644:web:b7d730d47a9c331951df61",
  measurementId: "G-4JPWB5J2RM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
export default auth;