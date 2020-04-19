import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authActions'
import classnames from 'classnames'
import './signup.css'
import avatar from './avatar.png'

function signup () {
  return (
    <div className='signupbox'>
      <img src={avatar} className='avatar' />
      <h1>Sign Up</h1>
      <form noValidate onSubmit={this.onSubmit}>
        <div className='input-field col s12'>
          <input
            onChange={this.onChange}
            value={this.state.name}
            error={errors.name}
            id='name'
            type='text'
            className={classnames('', {
              invalid: errors.name
            })}
          />
          <label htmlFor='name'>Name</label>
          <span className='red-text'>{errors.name}</span>
        </div>
        <div className='input-field col s12'>
          <input
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            id='email'
            type='email'
            className={classnames('', {
              invalid: errors.email
            })}
          />
          <label htmlFor='email'>Email</label>
          <span className='red-text'>{errors.email}</span>
        </div>
        <div className='input-field col s12'>
          <input
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            id='password'
            type='password'
            className={classnames('', {
              invalid: errors.password
            })}
          />
          <label htmlFor='password'>Password</label>
          <span className='red-text'>{errors.password}</span>
        </div>
        <div className='input-field col s12'>
          <input
            onChange={this.onChange}
            value={this.state.password2}
            error={errors.password2}
            id='password2'
            type='password'
            className={classnames('', {
              invalid: errors.password2
            })}
          />
          <label htmlFor='password2'>Confirm Password</label>
          <span className='red-text'>{errors.password2}</span>
        </div>
        <div className='col s12' style={{ paddingLeft: '11.250px' }}>
          <button
            style={{
              width: '150px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
              marginTop: '1rem'
            }}
            type='submit'
            className='btn btn-large waves-effect waves-light hoverable blue accent-3'
          >
                  Sign up
          </button>
        </div>
      </form>
    </div>
  )
}

export default signup

{ /* <form>
        <p>Email</p>
        <input id='email-input' type='text' name='' placeholder='Enter Email' />
        <p>Password</p>
        <input id='password-input' type='Password' name='' placeholder='Enter Password' />
        <input type='submit' name='' value='Sign Up' />
        <br />
        <a href='#'>Lost your password?</a>
        <br />
        <a href='#'>Don't have an account?</a>
      </form> */ }
