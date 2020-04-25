// import React from 'react';
// import '../App.css';

// function Nav() {
//     return (
//         <div className="Nav">
//             <div className="leftNav">
//                 <span><a href="/"></a></span>
//             </div>
//             <div className="rightNav">
//                 <ul>
//                     <li><a href="/">Home</a></li>
//                     <li><a href="/about">About</a></li>
//                     <li><a href="/contact">Contact</a></li>
//                     <li><a href="/Calender">Meal Plan</a></li>
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default Nav;

import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

function Nav() {
    return (
    <div class="menu-wrap">
        <input type="checkbox" class="toggler"/>
        <div class="hamburger"><div></div></div>
        <div class="menu">
        <div>
            <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>     
                <li><Link to="/Calender">Meal Plan</Link></li>       
            </ul>
            </div>
        </div>
        </div>
    </div>
    );
}

export default Nav;