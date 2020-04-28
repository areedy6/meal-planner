import React, { Component, useEffect } from 'react'
import './App.css'
import Nav from './components/Nav'
import Recipes from './components/Recipes'
import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import About from './components/About'
import Contact from './components/Contact'
import Ingredient from './components/Ingredient'
import Calender from './components/Cal'
import Login from './pages/Login/login'
import signup from './pages/signup/signup'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { loadUser } from './actions/authActions'
import store from './components/store'

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  const browserHistory = createBrowserHistory()

  return (
    <Router history={browserHistory}>
      <Provider store={store}>
        <div className='App'>
          <Nav />
          <Route path='/' exact component={Recipes} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/ingredients/:label' exact component={Ingredient} />
          <Route path='/Calender' exact component={Calender} />
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={signup} />
        </div>
      </Provider>
    </Router>
  )
}

export default App
