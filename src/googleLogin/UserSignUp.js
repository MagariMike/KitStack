import { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const UserSignup = () => {
  const [error, setError] = useState(null)
    
    const signup = (email, password ) => {
      setError(null)
      createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log('user signed up:', res.user)
      })
      .catch((err) => {
        setError(err.messsage)
      })
    }

    return { error, signup }
  }