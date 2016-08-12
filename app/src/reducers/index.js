import { combineReducers } from 'redux';
import places from './places';
import users from './users';
import { routerReducer } from 'react-router-redux'; // we need this for react-router

// Reducers list (just one for now)
const rootReducer = combineReducers({
  places,
  users,
  routing: routerReducer
});

export default rootReducer;
