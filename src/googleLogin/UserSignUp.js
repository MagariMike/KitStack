import React from "react";

function UserSignUp(){
    return(
        <div>
        <form>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" id="firstName" placeholder="enter your first name" />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" id="lastName" placeholder="enter your last name" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="enter your password" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder="enter your email" />
            </div>
        </form>
      </div>
    );
}

export default UserSignUp;

