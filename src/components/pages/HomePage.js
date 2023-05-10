import React from 'react'
import UserSignUp from '../../googleLogin/UserSignUp'
import UserLogin from '../../googleLogin/UserLogin.js'
import "../../styles/homepage.css"
import "../../styles/cta-buttons.css"
import KitStackMainImg from "../../assets/home-image.png"
import KitStackLogo from "../../assets/KitStack-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";


const Home = () => {

  return (
    <div className='HomePage'>
      <div className='HomePage__main-img'>
        <img src={KitStackMainImg}  />
      </div>
      <div className='HomePage__welcome-text'>
        <p>welcome to</p>
        <img src={KitStackLogo} />
      </div>
      <div className='HomePage__login'>
        <button className='google-button'>
          <FontAwesomeIcon icon={faGoogle} className='fa-google'/>
          <p>Continue with Google</p>
        </button>
        <div>
          <p className='dividerText'>or</p>
        </div>
        <button className='ctaButton'>
          Create account
        </button>
      </div>
    </div>
  )
}


export default Home;