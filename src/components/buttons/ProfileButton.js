import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ProfileButton = () => {
  return (
    <button className="w-10 h-10 rounded-full bg-blue-800 hover:bg-red-400 hover:bg-green-500 text-white text-xl">
      <FontAwesomeIcon icon={faUser} data-testid="fa-user-icon" />
    </button>
  );
};

export default ProfileButton;
