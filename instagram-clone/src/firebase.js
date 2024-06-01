
import { initializeApp } from "firebase/app";
import {getAuth} from  'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBXYKu7qEMc9OZO3Z-r17uxCg8Sjvs_T_o",
  authDomain: "instagram-clone-6ce44.firebaseapp.com",
  projectId: "instagram-clone-6ce44",
  storageBucket: "instagram-clone-6ce44.appspot.com",
  messagingSenderId: "47234655266",
  appId: "1:47234655266:web:5e1c659202bf6f44dbd67b",
  measurementId: "G-J3SSLXM7NX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();