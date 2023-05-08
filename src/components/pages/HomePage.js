import React from 'react'
import UserSignUp from '../../googleLogin/UserSignUp'
import UserLogin from '../../googleLogin/UserLogin.js'

const Home = () => {

  return (
    <div>
    <h2>Sign-up</h2>
    <UserSignUp />
    <h2>or Login</h2>
    <UserLogin/>
    </div>
  )
}


export default Home;