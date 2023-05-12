import React from 'react'
import "../../styles/pages/main-page.css"
import ShirtCard from '../ShirtCard'
import testPic from "../../assets/mikeProfilePic.jpeg"
const mainPage = () => {
  return (
    <div className='wrapper'>
        <div className="profile-block">
            <img id="test-pic"src={testPic} alt="test pic"></img>
            <h1 className='profile-tile'>My Profile</h1>
            
        </div>

        <div className='latest-shirts-block'>
            
            <div className='shirt-cards-block'>
            <ShirtCard/>
            <ShirtCard/>
            <ShirtCard/>
            </div>
            
        </div>

        <div className='news-block'>
          <h2>News</h2>
        </div>

import React from "react";
import "../../styles/pages/main-page.css";
import "../../styles/shirt-card.css";
import ShirtCard from "../ShirtCard";

const mainPage = () => {
  return (
    <div className="wrapper">
      <div className="profile-block">
        <div className="profile-tile">profile tile</div>
        <div className=""></div>
      </div>

      <div className="latest-shirts-block">
        <ShirtCard />
        <ShirtCard />
        <ShirtCard />
      </div>

    </div>
  );
};

export default mainPage;
