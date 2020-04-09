import React from 'react';
import '../App.css';

function Nav() {
    return (
        <div className="Nav">
            <div className="leftNav">
                <span><a href="/">Gourav Recipes</a></span>
            </div>
            <div className="rightNav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;