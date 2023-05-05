import React from "react";
import App from "../components/App";

function UserLogin(){

    return(
        <form>
            <div>
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" placeholder="enter your email"></input>
        </div>
        <div>
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" placeholder="enter your password">
            </input>
        </div>
        </form>
    )
}
export default UserLogin;