import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCs1RLw23AtQstsF7a8r_4JZbRWGEgThUE",
  authDomain: "auth-app-39cc7.firebaseapp.com",
  projectId: "auth-app-39cc7",
  storageBucket: "auth-app-39cc7.appspot.com",
  messagingSenderId: "940258604322",
  appId: "1:940258604322:web:62f6d89c65634f8194a17b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);