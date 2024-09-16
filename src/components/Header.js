import React from 'react'
import ProfileButton from "./buttons/ProfileButton";
import LogoutButton from "./buttons/LogoutButton";
import HomeButton from "./buttons/HomeButton";
import CreateItemButton from "./buttons/CreateItemButton";


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
       
        <Link to="/logout">
          <LogoutButton />
        </Link>
        </nav>
      </header>
  )
}

export default Header