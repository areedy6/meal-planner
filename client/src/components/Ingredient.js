import React from 'react'
import './Recipes.css'
import { useSelector, connect } from 'react-redux'

import { reducer } from '../reducers/index'
import Card from './Card.js'

function Ingredient (props) {
  { console.log(props) }
  const recipe = props.currentRecipe

  return (

    <div className='IngredientPage'>
      <div className='image'>
        <h2>{recipe.label}</h2>

        <img src={recipe.image} alt='...' />

      </div>
      <div className='list'>
        <h2>Instructions</h2> <a href={recipe.url} target='_blank'>Instructions</a>

        <h2>Ingredients</h2>
        <ul className='ingredients'>
          {recipe.ingredients.map((value) => (
            <li className='ingredientItem' key={Math.random()}>{value.text}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}
function mapStateToProps (state) {
  return {
    currentRecipe: state.recipes.currentRecipe
  }
}
export default connect(mapStateToProps)(Ingredient)
