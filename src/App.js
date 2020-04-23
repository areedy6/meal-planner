import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Recipes from './components/Recipes';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import About from './components/About';
import Contact from './components/Contact';
import Ingredient from './components/Ingredient';
import Login from './pages/Login'
import signup from './pages/signup'
import { createBrowserHistory } from 'history';

function App() {
  const browserHistory = createBrowserHistory();
  return (
    <Router history={browserHistory}>
      <div className='App'>
        <Nav />
        <Route path="/" exact component={Recipes} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/ingredients" exact component={Ingredient} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={signup} />
      </div>
    </Router>
  );
}

export default App;
