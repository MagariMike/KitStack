import React, { useState } from "react";
import { UserLogin } from "../googleLogin/UserLogin";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, signin } = UserLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <button onClick={handleSubmit}>Sign In</button>
      {error && <p>{error}</p>}
    </div>
  );
}