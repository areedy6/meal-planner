import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Recipes from './components/Recipes';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import About from './components/About';
import Contact from './components/Contact';
import Ingredient from './components/Ingredient';
import { createBrowserHistory } from 'history';


function App() {
  const browserHistory = createBrowserHistory();
  return (
    <Router history={browserHistory}>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Recipes} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/ingredients/:label" exact component={Ingredient} />
      </div>
    </Router>
  );
}

export default App;
