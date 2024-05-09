// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs8tLvVJC4J5NlY-uIVN8NfS8BRg3PTdo",
  authDomain: "filmpire-gpt-eb875.firebaseapp.com",
  projectId: "filmpire-gpt-eb875", 
  storageBucket: "filmpire-gpt-eb875.appspot.com",
  messagingSenderId: "248633311940",
  appId: "1:248633311940:web:238634c23c38ca6d093f91",
  measurementId: "G-6YCQP735LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();