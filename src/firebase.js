import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBBf4pEjyFdjOtJOmMLzyD7kUorlVgb0KQ",
  authDomain: "ductai-blog-a0d36.firebaseapp.com",
  projectId: "ductai-blog-a0d36",
  storageBucket: "ductai-blog-a0d36.appspot.com",
  messagingSenderId: "792116153644",
  appId: "1:792116153644:web:49e5f746d5e31a7bf23089",
  measurementId: "G-L8YEB03G3S",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
