import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCxibzvDmX0zxx-mSTAiU1nSsmtGsnLTIo",
  authDomain: "kitstack-66287.firebaseapp.com",
  databaseURL: "https://kitstack-66287-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "kitstack-66287",
  storageBucket: "kitstack-66287.appspot.com",
  messagingSenderId: "475586925445",
  appId: "1:475586925445:web:067c9033fbe28479caaaec",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
export { app, auth, provider, getDatabase, ref, set, update, db }; // Export necessary objects and functions
