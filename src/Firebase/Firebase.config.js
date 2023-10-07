// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9rRSkBHQoPvXILAP27ReEaZZJibjg2Jo",
  authDomain: "dragon-news-e7acd.firebaseapp.com",
  projectId: "dragon-news-e7acd",
  storageBucket: "dragon-news-e7acd.appspot.com",
  messagingSenderId: "244596756388",
  appId: "1:244596756388:web:a4153379b30301084dbb31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;