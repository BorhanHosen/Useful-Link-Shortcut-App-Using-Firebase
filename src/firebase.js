// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHrdoVcl3Vy2jKHw4Tg9H7vYChtf3KTM8",
  authDomain: "useful-link-shortcut-app.firebaseapp.com",
  projectId: "useful-link-shortcut-app",
  storageBucket: "useful-link-shortcut-app.firebasestorage.app",
  messagingSenderId: "959404724361",
  appId: "1:959404724361:web:516981b9698e92864f3658",
  measurementId: "G-ZJZPT8SD72",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the Firestore database instance
const db = getFirestore(app);
export { db };
