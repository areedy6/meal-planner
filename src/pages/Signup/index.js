import React from 'react';
import './signup.css';
import avatar from './avatar.png';
import background from './food.jpg';

function signup() {
  return (
    <div className='signupbox'>
      <img src={avatar} alt='avatar'/>
      <img src={background} alt='food' />
      <h1>Sign Up</h1>
      <form>
        <p>Email</p>
        <input type='text' name='' placeholder='Enter Email' />
        <p>Name</p>
        <input type='Name' name='' placeholder='Name' />
        <p>Password</p>
        <input type='Password' name='' placeholder='Enter Password'/>
        <input type='submit' name='' value='Sign Up'/>
        <br />
        <a href='#'>Lost your password?</a>
        <br />
        <a href='#'>Don't have an account?</a>
      </form>
    </div>
  );
}

export default signup;