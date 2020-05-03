import React, { Component } from 'react'
import './login.css'
import avatar from './avatar.png'
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import signup from '../signup/signup'

class Login extends Component {

  state = {
    username: "",
    password: ""
  }


onChange = e => {
  const target = e.target
  const name = target.name
  const value = target.value

  this.setState({
    [name]: value
  })
}

onSubmit = e => {
  e.preventDefault()

  const payload = {
    username: this.state.username,
    password: this.state.password
  }
  

  axios ({
    url: '/api/auth',
    method: 'POST',
    data: payload,
    
  })
  .then(() => {
    this.props.history.push("/About");
  })
  .catch(function (error) {
    if (error.response) {
      // Request made and server responded
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message)
    }
})
}

  render () {
  
  return (
    <div className='loginbox'>
      <img src={avatar} className='avatar' />

      <h1>Login Here</h1>
      <form onSubmit={this.onSubmit}>
        <p>Enter Email</p>
        <input type='text' name='username' placeholder='Enter Email' value={this.state.username}
            onChange={this.onChange}
            required />
        <p>Password</p>
        <input 
        type='password' 
        name='password' 
        placeholder='Password' 
        value={this.state.password}
           onChange={this.onChange}
            required />
        <input className='submitButton' type='submit' value='Submit'/>
        <br />
        <Link to='/signup'>Don't have an account?</Link>
      </form>
    </div>
  )
}
}

export default Login