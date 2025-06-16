
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB_37ZZguKBELnNHACmfwegBRkvIkjc894",
  authDomain: "mbbs-anonymous.firebaseapp.com",
  projectId: "mbbs-anonymous",
  storageBucket: "mbbs-anonymous.firebasestorage.app",
  messagingSenderId: "671524322752",
  appId: "1:671524322752:web:7612b9de0e1c5b14d35c25"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
