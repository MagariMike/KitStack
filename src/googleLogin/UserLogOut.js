import React from "react";
import { useHistory } from "react-router-dom";

function UserLogout() {
  const history = useHistory();

  function handleLogout() {
   
    history.push("/signin");
  }

  return (
    <div>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default UserLogout;
