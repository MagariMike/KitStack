import React from 'react'
import "../../styles/pages/home-feed.css"
import ShirtCard from '../ShirtCard'
import testPic from "../../assets/mikeProfilePic.jpeg"

const homeFeed = () => {
  return (
    <div className='wrapper'>
        <div className="profile-block">
            <img id="test-pic"src={testPic} alt="test pic"></img>
            <h1 className='profile-tile'>Mike Brewer</h1>
            
        </div>

      <div className='latest-shirts-block'>
        <h1>Latest Uploads</h1>
        <div className='shirt-cards-block'>
          <ShirtCard />
          <ShirtCard />
          <ShirtCard />
        </div>
      </div>

      <div>
        <button type="submit" name="submit" id="submit" value="Submit">
          Logout
        </button>
        <button type="submit" name="submit" id="submit" value="Submit">
          Add Shirt
        </button>
      </div>
    </div>
  );
};

export default homeFeed;
