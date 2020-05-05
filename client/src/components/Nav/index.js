
import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import '../pages/Login/login'
import '../pages/signup/signup'

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
    };
  }
  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

render() {
  return (
    <div class='menu-wrap'>
      <input type='checkbox' class='toggler' />
      <div class='hamburger'><div /></div>
      <div class='menu'>
        <div>
          <div>
            <ul>
              <li><Link onClick={() => this.toggleChange()} to='/About'>Home</Link></li>
              <li><Link onClick={() => this.toggleChange()} to='/recipes'>Search</Link></li>
              <li><Link onClick={() => this.toggleChange()} to='/Calender'>Meal Plan</Link></li>
              <li><Link onClick={() => this.toggleChange()} to='/'>Login</Link></li>
              <li><Link onClick={() => this.toggleChange()} to='/signup'>Sign Up</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}}

export default Nav
