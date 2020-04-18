import React from 'react'
import './login.css'
import avatar from './avatar.png'

function login () {
  return (
    <div className='loginbox'>
      <img src={avatar} className='avatar' />

      <h1>Login Here</h1>
      <form>
        <p>Username</p>
        <input type='text' name='' placeholder='Enter Username' />
        <p>Password</p>
        <input type='password' name='' placeholder='Password' />
        <a href='/login' id='login-button' class='login-button'>Login</a>
        <br />
        <a href='/signup' id='signup-button' class='signup-button'>Don't have an account?</a>
      </form>
    </div>
  )
}

export default login
