// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn__YWk9eP2Yx_ESDR_3ks-cWWn73WUlg",
  authDomain: "chatapp-5a9e6.firebaseapp.com",
  projectId: "chatapp-5a9e6",
  storageBucket: "chatapp-5a9e6.appspot.com",
  messagingSenderId: "524146022373",
  appId: "1:524146022373:web:4bc372b012c0dfd808c10c",
  measurementId: "G-0SHZ4SQSMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app