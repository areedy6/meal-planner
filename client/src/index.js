import React from 'react'
import App from './App'
import { combineReducers } from 'redux'
import ReactDOM from 'react-dom'
import errorReducer from './reducers/errorReducer'
import authReducer from './reducers/authReducer'

ReactDOM.render(<App />, document.getElementById('root'))

export default combineReducers({
  error: errorReducer,
  auth: authReducer
})
