import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAaMy3xAr8ekmEQIev5yuM5FAN0Fij1_A",
  authDomain: "portfolio-19f6e.firebaseapp.com",
  databaseURL:
    "https://portfolio-19f6e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-19f6e",
  storageBucket: "portfolio-19f6e.appspot.com",
  messagingSenderId: "278105289121",
  appId: "1:278105289121:web:a1c841594a3065d107dbe0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
