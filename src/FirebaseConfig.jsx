// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANfQtvWhgEvezUY5E0laJnPLbbkJ3uRUo",
  authDomain: "lebaba-ecomarce-website.firebaseapp.com",
  projectId: "lebaba-ecomarce-website",
  storageBucket: "lebaba-ecomarce-website.firebasestorage.app",
  messagingSenderId: "63897298117",
  appId: "1:63897298117:web:78225aa855d74712377cac",
  measurementId: "G-5BNPL405J8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default firebaseConfig