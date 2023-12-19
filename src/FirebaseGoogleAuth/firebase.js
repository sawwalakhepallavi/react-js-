import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACjMuVVC44khf9xGOiFBY66-_iPI3taRE",
  authDomain: "react-email-d7416.firebaseapp.com",
  projectId: "react-email-d7416",
  storageBucket: "react-email-d7416.appspot.com",
  messagingSenderId: "430949395546",
  appId: "1:430949395546:web:c7b159baa0f49c0479fc63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {auth,provider}