import React from "react";
import UserSignUp from "../../googleLogin/UserSignUp";
import UserLogin from "../../googleLogin/UserLogin.js";
import KitStackMainImg from "../../assets/home-image.png";
import KitStackLogo from "../../assets/KitStack-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div>
      <div>
        <img src={KitStackMainImg} />
      </div>
      <div>
        <p>welcome to</p>
        <img src={KitStackLogo} />
      </div>
      <div>
        <button className="google-button bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          <FontAwesomeIcon icon={faGoogle} className="fa-google" />
          <p>Continue with Google</p>
        </button>
        <div>
          <p className="dividerText">or</p>
        </div>
        <button className="w-12 h-12 rounded-full bg-blue-500">Create account</button>
      </div>
    </div>
  );
};

export default Home;
