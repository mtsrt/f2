import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAS7eqilf0T2y0Rk-qHDOdwRFmJmmydmss",
    authDomain: "signinpractice-d4f7e.firebaseapp.com",
    projectId: "signinpractice-d4f7e",
    storageBucket: "signinpractice-d4f7e.appspot.com",
    messagingSenderId: "672689318994",
    appId: "1:672689318994:web:d3b8c47428fa6dabc8438b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export{ auth, provider };