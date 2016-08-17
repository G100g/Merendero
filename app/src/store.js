import { createStore } from 'redux';
import rootReducer  from './reducers/';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router'
/*
  Store
  Redux apps have a single store which takes
  1. All Reducers which we combined into `rootReducer`
  2. An optional starting state - similar to React's getInitialState
*/

const defaultState = {
  places: { all: []},
  users: {

    giorgio: {
      name: 'Giorgio'
    },
    gabriele: {
      name: 'Gabriele'
    },
    davide: {
      name: 'davide'
    },

  },
  lunches: ['giorgio']
    // 20161011: {
    //   users: ['giorgio', 'davide', 'gabriele']
    // }

  // users: [],
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
