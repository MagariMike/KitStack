import React, { useState } from "react";
import "../styles/user-signup.css";
import KitStackLogo from "../assets/KitStack-logo.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import UserLogin from "./UserLogin";
import { auth } from "../firebase/config";

export const UserSignup = () => {
  const [error, setError] = useState(null);

  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("user signed up:", res.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="SignUpForm">
      <div>
        <img src={KitStackLogo} alt="KitStack Logo" />
        <p>
          Already registered? <Link to="#"><UserLogin />Log in here.</Link>
        </p>
      </div>
      <form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" placeholder="Pep" />
        </div>
        {/* Rest of the form */}
      </form>
    </div>
  );
};

export default UserSignup;
