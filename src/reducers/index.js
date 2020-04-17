import { combineReducers } from 'redux';
import calendar from './calendar';
import food from './food';


const initialState = {
    currentRecipe: {},
    searched: 'pasta',
    // calendar: {
    //     sunday: [],
    //     monday: [],
    //     tuesday: [],
    //     wednesday: [],
    //     thursday: [],
    //     friday: [],
    //     saturday: []
    // }
};

const reducer = (state = initialState, action) => {
    if (action.type === 'SET_RECIPE') {
        return {
            ...state,
            currentRecipe: { ...action.currentRecipe },
            searched: action.searched,
        };
    }
    return { ...state };
}

export default combineReducers({
    calendar,
    food,
    reducer
  });
  