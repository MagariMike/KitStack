// import React, { useState } from "react";
// import "../styles/user-signup.css";
// import KitStackLogo from "../assets/KitStack-logo.png";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { Link } from "react-router-dom";
// import UserLogin from "./UserLogin";
// import { auth } from "../firebase/config";

// export const UserSignup = () => {
//   const [error, setError] = useState(null);

//   const signup = (email, password) => {
//     setError(null);
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((res) => {
//         console.log("user signed up:", res.user);
//       })
//       .catch((err) => {
//         setError(err.message);
//       });
//   };

//   return (
//     <div className="SignUpForm">
//       <div>
//         <img src={KitStackLogo} />
//         <p>
//           Already registered? <Link><UserLogin/>Log in here.</Link>
//         </p>
//       </div>
//       <form>
//         <div>
//           <label htmlFor="firstName">First Name</label>
//           <input type="text" name="firstName" id="firstName" placeholder="Pep" />
//         </div>

//         <div>
//           <label htmlFor="lastName">Last Name</label>
//           <input
//             type="text"
//             name="lastName"
//             id="lastName"
//             placeholder="Guardiola"
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input type="password" name="password" id="password" placeholder="****" />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input type="email" name="email" id="email" placeholder="pep@mancity.com" />
//         </div>
//         <div>
//           <label htmlFor="submit"></label>
//           <input type="submit" name="submit" id="submit" placeholder="submit" />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UserSignup;
