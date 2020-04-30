import React, { Component } from 'react'
import './signup.css'
import avatar from './avatar.png'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

  onChange = e => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  onSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state

    axios.post("/api/auth/register", { username, password }).then(result => {
      this.props.history.push("/login")
    })
  }


render () {
  const { username, password } = this.state;
  return (
    <div className='signupbox'>
      <img src={avatar} className='avatar' />
      <h1>Sign Up</h1>
      <form OnSubmit={this.onSubmit}>
        <p>Sign Up With Email </p>
        <input id='name' type='text' name='name' placeholder='Enter Email' value={username}
            onChange={this.onChange}
            required />
        <p>Password </p>
        <input type='Password' name='' placeholder='Enter Password' value={password}
            onChange={this.onChange}
            required  />
        <input type='submit' name='' value='Sign Up' />
        <br />
        <br />
      </form>
    </div>
  )
}
}

export default Signup
