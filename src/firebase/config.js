import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxibzvDmX0zxx-mSTAiU1nSsmtGsnLTIo",
  authDomain: "kitstack-66287.firebaseapp.com",
  projectId: "kitstack-66287",
  storageBucket: "kitstack-66287.appspot.com",
  messagingSenderId: "475586925445",
  appId: "1:475586925445:web:067c9033fbe28479caaaec"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};