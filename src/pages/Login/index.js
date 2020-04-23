import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from '../../actions/authAction'
import classnames from 'classnames'
import './login.css'
import avatar from './avatar.png'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }


  // If logged in and user navigates to Login page, should redirect them to dashboard
  componentDidMount() {
    if (this.props.auth && this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    } else {
      console.log('broke')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth && nextProps.auth.isAuthenticated) {
      this.props.history.push('/');
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

render () {
  const { errors } = this.state;

    return (
      <div className='loginbox'>
      <img src={avatar} className='avatar'/>
     
      <h1>Login Here</h1>
      <form noValidate onSubmit={ this.onSubmit }>
        <p>Username</p>
        <input  type='text' name='' placeholder='Enter Username' />
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
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { loginUser }
)(Login)



     
    