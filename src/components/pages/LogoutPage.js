import React from "react";
import { getAuth } from "firebase/auth";

const LogoutButton = () => {
  const auth = getAuth(); // Firebase authentication object
  
  const handleLogout = () => {
    // Handle the logout functionality using Firebase
    // ...
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
