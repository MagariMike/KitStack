import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../firebase/config"

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AddShirtPage from "./pages/AddShirtPage";
import Login from "../components/pages/login";
import SignUp from "../components/pages/signup";
import HomeFeed from "./pages/HomeFeed";
import ShirtCard from "../components/ShirtCard"
import Layout from "./Layout";


function App() {
  
 
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<HomeFeed />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/add-shirt" element={<AddShirtPage />}></Route>
          <Route path="/shirt-card" element={<ShirtCard />}></Route>
          <Route path="/logout" element={<Login/>}></Route>
        </Route>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
  }

export default App;
