import React from 'react'
import './signup.css'
import avatar from './avatar.png'
import propTypes from 'prop-types'
import { connect } from 'mongoose'
// import { register } from '../../actions/authActions'

// static propTypes = {
//   isAuthenticated: PropTypes.bool,
//   error: PropTypes.object.isRequired,
//   register: propTypes.func.isRequired
// }

function signup () {
  return (
    <div className='signupbox'>
      <img src={avatar} className='avatar' />
      <h1>Sign Up</h1>
      <form>

        <p>Email </p>
        <input id='name' type='text' name='name' placeholder='Enter Email' onChange={this.onChange} />
        <p>Password </p>
        <input type='Password' name='' placeholder='Enter Password' />
        <input type='submit' name='' value='Sign Up' />

        <br />
        <a href='#'>Lost your password?</a>
        <br />
        <a href='#'>Don't have an account?</a>

      </form>
    </div>
  )
}

// const mapStatetoProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated,
//   error: state.error
// })

export default signup
