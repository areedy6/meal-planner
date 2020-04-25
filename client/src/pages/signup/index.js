import React from 'react'
import './signup.css'
import avatar from './avatar.png'

// class registerModal extends Component {
//   state = {
//     modal: false,
//     name: '',
//     email: '',
//     password: '',
//     msg: null
//   }
// }

// static propTypes = {
//   isAuthenticated: PropTypes.bool,
//   error: PropTypes.object.isRequired
// }

// componentDidMount() {
//   if (this.props.auth && this.props.auth.isAuthenticated) {
//     this.props.history.push('/');
//   } else {
//     console.log('broke')
//   }
// }

// componentWillReceiveProps(nextProps) {
//   if (nextProps.errors) {
//     this.setState({
//       errors: nextProps.errors
//     });
//   }
// }

// onChange = e => {
//   this.setState({ [e.target.id]: e.target.value });
// };

// onSubmit = e => {
//   e.preventDefault();

//   const newUser = {
//     name: this.state.name,
//     email: this.state.email,
//     password: this.state.password,
//     password2: this.state.password2
//   };

//   this.props.registerUser(newUser, this.props.history);
// }

function signup () {
  // const { errors } = this.state;

  return (
    <div className='signupbox'>
      <img src={avatar} className='avatar' />
      <h1>Sign Up</h1>
      <form>
        <p>Email</p>
        <input type='text' name='' placeholder='Enter Email' />
        <p>Password</p>
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

// Register.propTypes = {
//   registerUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// }

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated,
//   errors: state.errors
// })

export default signup
