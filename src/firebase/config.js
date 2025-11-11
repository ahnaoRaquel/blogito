
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnVOlKZIcKOyXpOnuGnqSZk0V5ZJ9PzJ4",
  authDomain: "blogito-a73c2.firebaseapp.com",
  projectId: "blogito-a73c2",
  storageBucket: "blogito-a73c2.firebasestorage.app",
  messagingSenderId: "499528975397",
  appId: "1:499528975397:web:bbb6d286a80079c50fabcc"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };