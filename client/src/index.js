import React from 'react'
import App from './App'
import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import ReactDOM from 'react-dom'
import errorReducer from './reducers/errorReducer'
import authReducer from './reducers/authReducer'
import { Provider } from 'react-redux'
import reducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(logger, thunk))

const store = createStore(reducer, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))

export default combineReducers({
  error: errorReducer,
  auth: authReducer
})
