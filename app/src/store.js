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
  user: {
    id: 'giorgio',
    name: 'Giorgio'
  },
  places: {
    prete: {
      name: 'Al bar del prete'
    },
    ciao: {
      name: 'Ciao'
    },
    pignotto: {
      name: 'Pignotto'
    },
    piadina: {
      name: 'Piadina'
    }
  },
  users: {

    giorgio: {
      name: 'Giorgio',
      votes: {
        piadina: 3,
        ciao: 2,
        prete: 4,
        pignotto: 5,

      }
    },
    gabriele: {
      name: 'Gabriele',
      votes: {
        piadina: 5,
        ciao: 5,
        prete: 1,
        pignotto: 2,

      }
    },
    davide: {
      name: 'Davide',
      votes: {
        piadina: 1,
        ciao: 0,
        prete: 5,
        pignotto: 5,

      }
    },

  },
  lunches: []
    // 20161011: {
    //   users: ['giorgio', 'davide', 'gabriele']
    // }

  // users: [],
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
