import React from 'react';
import './Recipes.css';
import { useSelector } from 'react-redux';

function Ingredient() {
    const recipe = useSelector(state => state.currentRecipe);
    return (
        <div className="IngredientPage">
            <div className="image">
                <h2>{recipe.label}</h2>
                <img src={recipe.image} alt="..." />
            </div>
            <div className="list">
                <h2>Ingredients</h2>
                <ul className="ingredients">
                    {recipe.ingredients.map((value) => (
                        <li className="ingredientItem" key={Math.random()}>{value.text}</li>
                    ))}
                </ul>
            </div>

        </div >
    );
}

export default Ingredient;