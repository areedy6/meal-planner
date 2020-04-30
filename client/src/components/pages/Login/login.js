import React, { Component } from 'react'
import './login.css'
import avatar from './avatar.png'
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import signup from '../signup/signup'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      message: ""
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

    axios
      .post("/api/auth/login", { username, password })
      .then(result => {
        localStorage.setItem("jwtToken", result.data.token)
        this.setState({ message: "" })
        this.props.history.push("/")
      })
      .catch(error => {
        if (error.response.status === 401) {
          this.setState({
            message: "Login failed. Username or password does not match"
          })
        }
      })
  }


  render () {
    const { username, password, message } = this.state;
  return (
    <div className='loginbox'>
      <img src={avatar} className='avatar' />

      <h1>Login Here</h1>
      <form onSubmit={this.onSubmit}>
        <p>Enter Email</p>
        <input type='text' name='' placeholder='Enter Email' value={this.username}
            onChange={this.onChange}
            required />
        <p>Password</p>
        <input type='password' name='' placeholder='Password' value={this.password}
           onChange={this.onChange}
            required />
        <input type='submit' name='' value='Login' />
        <br />
        <a href='#'>Lost your password?</a>
        <br />
        <Link to='/signup'>Don't have an account?</Link>
      </form>
    </div>
  )
}
}

export default Login