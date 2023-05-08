import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ProfileButton from "./buttons/ProfileButton";
import LogoutButton from "./buttons/LogoutButton";
import HomeButton from "./buttons/HomeButton";
import CreateItemButton from "./buttons/CreateItemButton";

import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage";
import CreateItemPage from "./pages/CreateItemPage";
import LogoutPage from "./pages/LogoutPage";

function App() {
  return (
    <BrowserRouter>



    <div className="App">
    
      <Link to="/home"><HomeButton/></Link>
      <Link to="/profile"><ProfileButton/></Link>
      <Link to="/create-item"><CreateItemButton/></Link>
      <Link to="/logout"><LogoutButton/></Link>

    </div>
        <Routes>

          <Route path="/home" element={<HomePage/>}></Route>
          <Route path="/profile" element={<ProfilePage/>}></Route>
          <Route path="/create-item" element={<CreateItemPage/>}></Route>
          <Route path="/logout" element={<LogoutPage/>}></Route>
    
        </Routes>
  
    </BrowserRouter>
  );
}

export default App;