import React from "react";
import "../styles/user-signup.css";
import KitStackLogo from "../assets/KitStack-logo.png";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const UserSignup = () => {
  const [error, setError] = useState(null);

  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("user signed up:", res.user);
      })
      .catch((err) => {
        setError(err.messsage);
      });
  };

  function UserSignUp() {
    return (
      <div className="SignUpForm">
        <div>
          <img src={KitStackLogo} />
          <p>
            Already registered? <a href="#">Log in here.</a>
          </p>
        </div>
        <form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Pep"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Guardiola"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="****"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="pep@mancity.com"
            />
          </div>
          <div>
            <label htmlFor="submit"></label>
            <input
              type="submit"
              name="submit"
              id="submit"
              placeholder="submit"
            />
          </div>
        </form>
      </div>
    );
  }

  return { error, signup };
};
