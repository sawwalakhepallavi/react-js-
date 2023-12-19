import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyACjMuVVC44khf9xGOiFBY66-_iPI3taRE",
  authDomain: "react-email-d7416.firebaseapp.com",
  projectId: "react-email-d7416",
  storageBucket: "react-email-d7416.appspot.com",
  messagingSenderId: "430949395546",
  appId: "1:430949395546:web:c7b159baa0f49c0479fc63"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
