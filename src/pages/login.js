import React from 'react'
import './login.css'

function login () {
  return (
    <div className="login box">
      <img src="avatar.png" alt="avatar" />
      <h1>Login Here</h1>
      <form>
        <p>Username</p>
        <input type="text" name="" placeholder="Enter Username" />
        <p>Password</p>
        <input type="password" name="" placeholder="Password" />
        <input type="submit" name="" value="Login" /><br />
        <a href="#">Lost your password?</a><br />
        <a href="#">Don't have an account?</a>
      </form>
    </div>
  )
}

export default login;
