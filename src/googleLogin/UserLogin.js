import { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const UserLogin = () => {
    const [error, setError] = useState(null)
    
    const login = (email, password ) => {
      setError(null)
      signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log('user logged in:', res.user)
      })
      .catch((err) => {
        setError(err.messsage)
      })
    
}

    return { error, login }
}