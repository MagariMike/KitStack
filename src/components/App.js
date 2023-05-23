import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../firebase/config"

import ProfileButton from "./buttons/ProfileButton";
import LogoutButton from "./buttons/LogoutButton";
import HomeButton from "./buttons/HomeButton";
import CreateItemButton from "./buttons/CreateItemButton";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AddShirtPage from "./pages/AddShirtPage";
import Login from "../components/pages/login";
import SignUp from "../components/pages/signup";
import HomeFeed from "./pages/HomeFeed";
import ShirtCard from "../components/ShirtCard"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function App() {
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('user signed out');
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <BrowserRouter>
      <div className="App flex justify-center items-center space-x-1 my-4">
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
        <button className="w-10 h-10 rounded-full bg-blue-800 hover:bg-green-500 hover:bg-red-400 text-white text-xl" onClick={handleSignout}>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
        </span>
      </div>
      <Routes>
        {/* <Route path="/home" element={<HomePage />}></Route> */}
        <Route path="/home" element={<HomeFeed />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/add-shirt" element={<AddShirtPage />}></Route>
        <Route path="/shirt-card" element={<ShirtCard />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
  }
export default App;
