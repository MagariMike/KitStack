import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/config';

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

return (
    <div>
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
        </div>
      </form>
    </div>
  );
}




export default Signin;