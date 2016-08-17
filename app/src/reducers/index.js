import { combineReducers } from 'redux';
import places from './places';
import users from './users';
import lunches from './lunches';
import { routerReducer } from 'react-router-redux'; // we need this for react-router

// Reducers list (just one for now)
const rootReducer = combineReducers({
  places,
  users,
  routing: routerReducer,
  lunches,
});

export default rootReducer;
