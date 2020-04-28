import React from 'react'
// import { loginUser } from '../../actions/authAction'
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
        <input type='submit' name='' value='Login' />
        <br />
        <a href='#'>Lost your password?</a>
        <br />
        <a href='#'>Don't have an account?</a>
      </form>
    </div>
  )
}

export default login
