
import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import '../pages/Login/login'
import '../pages/signup/signup'

function Nav () {
  return (
    <div class='menu-wrap'>
      <input type='checkbox' class='toggler' />
      <div class='hamburger'><div /></div>
      <div class='menu'>
        <div>
          <div>
            <ul>
              <li><Link to='/About'>Home</Link></li>
              <li><Link to='/recipes'>Search</Link></li>
              <li><Link to='/Calender'>Meal Plan</Link></li>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/signup'>Sign Up</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
