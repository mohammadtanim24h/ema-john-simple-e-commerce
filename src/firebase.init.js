import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2OwpAMiPGZon9lXdFRoDwrTtCPmGnySE",
  authDomain: "ema-john-simple-a1d75.firebaseapp.com",
  projectId: "ema-john-simple-a1d75",
  storageBucket: "ema-john-simple-a1d75.appspot.com",
  messagingSenderId: "481572766693",
  appId: "1:481572766693:web:c04911d867f93a8003e50c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;