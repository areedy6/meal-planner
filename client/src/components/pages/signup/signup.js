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
    data: payload,
    
  })
  .then(() => {
    console.log('/api/users')
    console.log('Payload has been sent to server')
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
  console.log('State', this.state)
  return (
    <div className='signupbox'>
      <img src={avatar} className='avatar' />
      <h1>Sign Up</h1>
      <form onSubmit={this.onSubmit}>
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
        <input className='submitButton' type='submit' value='Submit' />
        <br />
        <br />
      </form>
    </div>
  )
}
}

export default Signup
