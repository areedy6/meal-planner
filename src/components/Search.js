import React from 'react';
import './Recipes.css';

function Search(props) {
    return (
        <div className="Search">
            <input type="text" placeholder="Search any recipe" onChange={props.handleSearch} onKeyDown={props.keyDown} />
            <div className="checkboxInput">
                <input type="checkbox" onClick={props.handleVeg} checked={props.checkedValue} /> Veg
            </div>
        </div>
    );
}

export default Search;