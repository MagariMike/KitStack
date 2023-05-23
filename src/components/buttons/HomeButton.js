import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const HomeButton = () => {
  return (
    <button className="w-10 h-10 rounded-full bg-blue-800 hover:bg-red-400 hover:bg-green-500 text-white text-xl">
      <FontAwesomeIcon icon={faHouse} data-testid="fa-house-icon" />
    </button>
  );
};

export default HomeButton;
