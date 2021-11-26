// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVx5jNTLYegQo7wU1WED7CWW90sYV6N3w",
  authDomain: "spotifyclone-d1b5f.firebaseapp.com",
  projectId: "spotifyclone-d1b5f",
  storageBucket: "spotifyclone-d1b5f.appspot.com",
  messagingSenderId: "306100565318",
  appId: "1:306100565318:web:77600d46fb020e2636e147",
  measurementId: "G-0V67N1V0QR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);