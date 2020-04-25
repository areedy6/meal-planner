import { combineReducers } from 'redux'
import calendar from './calendar'
import food from './food'

const initialState = {
  currentRecipe: {},
  searched: 'pasta'

}

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_RECIPE') {
    return {
      ...state,
      currentRecipe: { ...action.currentRecipe },
      searched: action.searched
    }
  }
  return { ...state }
}

export default combineReducers({
  calendar,
  food,
  recipes: reducer
})
