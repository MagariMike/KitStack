import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

import ProfileButton from "./buttons/ProfileButton";
import LogoutButton from "./buttons/LogoutButton";
import HomeButton from "./buttons/HomeButton";
import CreateItemButton from "./buttons/CreateItemButton";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AddShirtPage from "./pages/AddShirtPage";
import Login from "../components/pages/Login";
import SignUp from "./pages/Signup";
import HomeFeed from "./pages/HomeFeed";

function App() {
  const handleSignout = () => {
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  console.log('user signed out')
}).catch((error) => {
  // An error happened.
  console.log(error)
});
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/home">
          <HomeButton />
        </Link>
        <Link to="/profile">
          <ProfileButton />
        </Link>
        <Link to="/login">
          <ProfileButton />
        </Link>
        <Link to="/add-shirt">
          <CreateItemButton />
        </Link>
        <LogoutButton onClick={handleSignout} />
      </div>
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/add-shirt" element={<AddShirtPage />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
