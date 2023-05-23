import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CreateItemButton = () => {
  return (
    <button className="w-10 h-10 p- rounded-full bg-blue-800 hover:bg-green-500 text-white text-xl">
      <FontAwesomeIcon icon={faPlus} data-testid="fa-plus-icon" />
    </button>
  );
};

export default CreateItemButton;
