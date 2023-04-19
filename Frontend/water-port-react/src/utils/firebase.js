// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4abIVXvrxB9Ubw7SRGDyaCiMWhP1PrTg",
  authDomain: "water-portability.firebaseapp.com",
  databaseURL: "https://water-portability-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "water-portability",
  storageBucket: "water-portability.appspot.com",
  messagingSenderId: "548406958050",
  appId: "1:548406958050:web:05ac416fc2f7bf49304bbb",
  measurementId: "G-667JGFNMPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;