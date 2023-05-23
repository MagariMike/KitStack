import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/config';
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";


const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const onSubmit = async (e) => {
    e.preventDefault()
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, 'signed in');
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
    });
};
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
      .then((result) => {
          console.log(result.user)
      })
      .catch((error) => {
        console.log(error)
      })
}
return (
    <div className="login-form">
      <form>
      <div>
          <label htmlFor="email">Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
         />
        </div>
        <div>
        <button type="submit" onClick={onSubmit}>log in</button>
        <button type="submit" onClick={signInWithGoogle}>log in with Google</button>
        </div>
      </form>
    </div>
  );
}
export default Signin;
