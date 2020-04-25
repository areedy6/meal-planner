import axios from 'axios'
import { returnErrors } from './errorActions'

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from '../actions/types'

// Checks tokens and loads user
export const loadUser = () => (dispatch, getState) => {
  // Changes state to loading
  dispatch({ type: USER_LOADING })

  let token

  // Grabs token from localStorage
  if (getState().auth) {
    token = getState().auth.token
  } else {
    token = ''
  }

  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }

  // Checks token
  if (token) {
    config.headers['x-auth-token'] = token
  }

  axios.get('/api/auth/user, tokenConfig(getState) ')
    .then(res => dispatch({
      type: USER_LOADED,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: AUTH_ERROR
      })
    })
}

export const tokenConfig = getState => {
  const token = getState().auth.token
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }

  if (token) {
    config.headers['x-auth-token'] = token
  }

  return config
}
