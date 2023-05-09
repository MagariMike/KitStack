import React from "react";
import "../styles/user-signup.css"
import KitStackLogo from "../assets/KitStack-logo.png";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
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
const db = getFirestore(app);

function UserSignUp() {
  return (
    <div className="SignUpForm">
      <div>
        <img src={KitStackLogo} />
        <p>Already registered? <a href="#">Log in here.</a></p>
      </div>
      <form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" placeholder="Pep" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" placeholder="Guardiola" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="****" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="pep@mancity.com" />
        </div>
        <div>
          <label htmlFor="submit"></label>
          <input type="submit" name="submit" id="submit" placeholder="submit" />
        </div>
      </form>
    </div>
  );
}

export default UserSignUp;
