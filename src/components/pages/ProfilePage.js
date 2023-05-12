import React from "react";
import profilePic from "../../assets/mikeProfilePic.jpeg";
import "../../styles/pages/profile-page.css";
import ShirtCard from "../ShirtCard";

const ProfilePage = () => {
  return (
    <>
      <div className="wrapper">
        <div className="profile-header">
          <img className="profile-pic" src={profilePic} alt="Avatar"></img>

          <div className="user-name">Mike Brewer</div>
          <div className="shirt-total">Shirts: 5</div>
        </div>
        <div className="shirt-cards">
          <div className="">
            <ShirtCard />
            <ShirtCard />
            <ShirtCard />
          </div>
        </div>
      </div>
    </>
    // create background color with wrapper div
  );
};

export default ProfilePage;
