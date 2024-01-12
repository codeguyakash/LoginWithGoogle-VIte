import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const {
  VITE_FIREBASA_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_DATABASE_URL,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET,
  VITE_MSG_SEND_ID,
  VITE_APP_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_FIREBASA_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  databaseURL: VITE_DATABASE_URL,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET,
  messagingSenderId: VITE_MSG_SEND_ID,
  appId: VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getDatabase();

export default app;
