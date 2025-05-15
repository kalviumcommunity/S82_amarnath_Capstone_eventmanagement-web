// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { signInWithPopup } from "firebase/auth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOwR89neBNLAijkFNILMnUFSpKMSmQTKw",
  authDomain: "event-management-web-1e377.firebaseapp.com",
  projectId: "event-management-web-1e377",
  storageBucket: "event-management-web-1e377.firebasestorage.app",
  messagingSenderId: "662241147995",
  appId: "1:662241147995:web:efd4f8325affb327f8537e",
  measurementId: "G-0T56HFQTFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account", // 👈 Forces account chooser
});
export{auth,provider}