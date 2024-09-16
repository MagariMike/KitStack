import { useState } from "react";
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

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
    <span>
        <button className="w-10 h-10 rounded-full bg-blue-800 hover:bg-green-500 text-white text-xl" onClick={logout}> 
       
          <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
        </span>
  );
};

export default LogoutButton;
