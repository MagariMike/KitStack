import React from 'react'
import ProfileButton from "./buttons/ProfileButton";
import LogoutButton from "./buttons/LogoutButton";
import HomeButton from "./buttons/HomeButton";
import CreateItemButton from "./buttons/CreateItemButton";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



const Header = () => {
    
  return (
    <header className="App flex justify-center items-center space-x-1 my-4">
        <nav>
        <Link to="/home">
          <HomeButton />
        </Link>
        <Link to="/profile">
          <ProfileButton />
        </Link>
        <Link to="/login">
        
        </Link>
        <Link to="/add-shirt">
          <CreateItemButton />
        </Link>
      <span>
        <button className="w-10 h-10 rounded-full bg-blue-800 hover:bg-green-500 text-white text-xl"> 
        {/* onClick={handleSignout} added into the end of the button tag above*/}
          <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
        </span>
        </nav>
      </header>
  )
}

export default Header