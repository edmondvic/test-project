import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "vidswiftapp.firebaseapp.com",
  projectId: "vidswiftapp",
  storageBucket: "vidswiftapp.firebasestorage.app",
  messagingSenderId: "514263337796",
  appId: "1:514263337796:web:fe22ba15e898fd9bbb2511",
};

export const app = initializeApp(firebaseConfig);