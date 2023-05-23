import { useState } from "react";
import React from "react";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

const LogoutButton = () => {
  const logout = () => {
    signOut(auth)
      .then(() => {
        // User successfully logged out
        console.log("User logged out");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div>
      <button type="submit" onClick={logout}>Logout</button>
    </div>
  );
};

export default LogoutButton;
