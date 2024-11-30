import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXxWR1BBaIQ97DLUHi4WKGjeW6g2JaQ_o",
  authDomain: "note-wind-by-haroon.firebaseapp.com",
  projectId: "note-wind-by-haroon",
  storageBucket: "note-wind-by-haroon.firebasestorage.app",
  messagingSenderId: "726724008628",
  appId: "1:726724008628:web:18c812c8a90b50c3e855e1",
  measurementId: "G-576W4C6VMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const notesRef = collection(db, "notes");

export { db, auth, provider, notesRef };


