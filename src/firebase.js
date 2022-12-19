// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHig4BVsRhw1zTXNlWOkrLtgvvu6NSz5U",
  authDomain: "todo-fe958.firebaseapp.com",
  projectId: "todo-fe958",
  storageBucket: "todo-fe958.appspot.com",
  messagingSenderId: "199245484624",
  appId: "1:199245484624:web:9d378cfd3c635971e7b755"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);