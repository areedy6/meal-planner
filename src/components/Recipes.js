import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Recipes.css';
import Search from './Search';

function Recipes() {
    const dispatch = useDispatch();
    const savedSearch = useSelector(state => state.searched);
    const [searchedValue, setSearchedValue] = useState(savedSearch);
    const [mainSearched, setMainSearched] = useState(searchedValue);
    const [veg, setVeg] = useState(true);
    const [recipeArr, setRecipeArr] = useState([]);
    const app_id = "abf008f3", app_key = "0aecda60dcf1b8a39109d3afa689f6ff";
    let url = `https://api.edamam.com/search?q=${mainSearched}&app_id=${app_id}&app_key=${app_key}`;
    useEffect(() => {
        getData();
    }, [mainSearched, veg]);


    const getData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        let temp;
        if (veg === true) {
            temp = data.hits.filter((value) => {
                const healthLabels = [...value.recipe.healthLabels];
                return healthLabels.findIndex((value1) => value1 === "Vegetarian") !== -1;
            });
        }
        else {
            temp = data.hits.filter((value) => {
                const healthLabels = [...value.recipe.healthLabels];
                return healthLabels.findIndex((value1) => value1 === "Vegetarian") === -1;
            });
        }
        setRecipeArr(temp);
    }

    const searchFunction = (e) => {
        setSearchedValue(e.target.value);
    }

    const handleVegEvent = (e) => {
        setVeg(e.target.checked);
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 32 || e.keyCode === 13) {
            setMainSearched(searchedValue);
        }
    }

    const handleIngredientClick = (recipe) => {
        dispatch({ type: 'SET_RECIPE', currentRecipe: { ...recipe }, searched: mainSearched });
    }
    return (
        <div className="Recipes">
            <Search handleSearch={(e) => searchFunction(e)} handleVeg={(e) => handleVegEvent(e)}
                checkedValue={veg} keyDown={(e) => handleKeyDown(e)} />
            <ul className="recipeList">
                {recipeArr.map(({ recipe }) => {
                    return (
                        <li key={recipe.label} className="recipeItem">
                            <h2>{recipe.label}</h2>
                            <Link to={"/ingredients/" + recipe.label} onClick={() => handleIngredientClick(recipe)}>
                                <img src={recipe.image} alt="..." />
                            </Link>
                            <p>Calories : {recipe.calories.toFixed(2)}</p>
                        </li>
                    );

                })}
            </ul>
        </div>
    );

}

export default Recipes;