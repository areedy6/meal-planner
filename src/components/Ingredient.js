import React from 'react';
import './Recipes.css';
import { useSelector } from 'react-redux';
import Card from './Card';

function Ingredient(props) {
   console.log(props.location.state);
     
       
          const { image, headerTxt, title, ingredients } = props.location.state.recipe;
          const style = { 
              backgroundImage: 'url(' + image + ')'}
        
          return (
            
            <Card image = {image} headerTxt = {headerTxt} title = {title} style = {style}>
                <ul>
          {ingredients.map(ingredient => <li>{ingredient.text}</li>)}
                </ul>
            </Card>

          )      
          };


export default Ingredient;
