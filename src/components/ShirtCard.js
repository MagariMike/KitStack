import React from "react";
import "../styles/shirt-card.css";
import testShirtPic from "../assets/shirtCardTestPic.png";

const ShirtCard = () => {
  return (
    <div className="shirt-wrapper">
      <img id="test-pic" src={testShirtPic} alt="test pic"></img>
      <h5>Club:</h5>
      <h5>Color:</h5>
      <h5>Season:</h5>
    </div>
  );
};

// ideally we can link these shirt cards to a shirt in the directory later on

export default ShirtCard;
