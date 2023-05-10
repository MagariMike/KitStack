import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "../../styles/navbar-buttons.css";

const HomeButton = () => {
  return (
    <button className="NavbarButtons">
      <FontAwesomeIcon icon={faHouse} data-testid="fa-house-icon" />
    </button>
  );
};

export default HomeButton;
