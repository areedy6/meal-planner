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
      data: payload
    })
    .then(() => {
      console.log('Payload has been sent to server')
    })
    .catch(() => {
      console.log('Internal server error')
    })
  }


  render () {
  console.log('State', this.state)
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
        <input type='submit'/>
        <br />
        <br />
        <Link to='/signup'>Don't have an account?</Link>
      </form>
    </div>
  )
}
}

export default Login