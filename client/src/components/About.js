import React from 'react'
import './Recipes.css'
import { Link } from 'react-router-dom'

function About () {
  return (
    <div className='container'>
      <h2 className='heading'>About Us</h2>
      <div className='about'>
        <p>Welcome to our Meal Planner. Using our search engine enter the featured ingredient you have handy to explore a wide variety of recipes that put that element to culinary usage.</p>
        <br />
        <p>Using our Calendar feature you will also be able to customize a Calendar of meals for your week-to-week diet</p>
        <p></p>
        <br />
        <li><Link to="/recipes">Lets get started!</Link></li> 
      </div>
    </div>
  )
}

export default About
