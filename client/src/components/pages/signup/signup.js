import React, { Component } from 'react'
import './signup.css'
import avatar from './avatar.png'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Signup extends Component {
  
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
    url: '/api/users',
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
    <div className='signupbox'>
      <img src={avatar} className='avatar' />
      <h1>Sign Up</h1>
      <form OnSubmit={this.onSubmit}>
        <p>Sign Up With Email </p>
        <input type='text' name='username' placeholder='Enter Email' value={this.state.username}
            onChange={this.onChange}
            required />
        <p>Password </p>
        <input 
         type='password'
         name='password'
         placeholder='Enter Password' 
         value={this.state.password}
            onChange={this.onChange}
            required  />
        <input type='submit' />
        <br />
        <br />
      </form>
    </div>
  )
}
}

export default Signup
