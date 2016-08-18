import { combineReducers } from 'redux';
import places from './places';
import user from './user';
import users from './users';
import lunches from './lunches';
import { routerReducer } from 'react-router-redux'; // we need this for react-router

// Reducers list (just one for now)
const rootReducer = combineReducers({
  places,
  users,
  routing: routerReducer,
  lunches,
  user
});

export default rootReducer;
