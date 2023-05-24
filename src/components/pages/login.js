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
  <div className="flex justify-center items-center">
  <div className="w-96">
    <form className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-4">
        <label htmlFor="email" className="text-lg font-medium">
          Email:
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="text-lg font-medium">
          Password:
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          onClick={onSubmit}
          className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Log in
        </button>
        <button
          type="submit"
          onClick={signInWithGoogle}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-600"
        >
          Login with Google
        </button>
      </div>
    </form>
  </div>
</div>
  );
}
export default Signin;
