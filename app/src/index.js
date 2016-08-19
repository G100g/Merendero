import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router'

import AppContainer from './components/AppContainer';
import Places from './components/Places';
import SinglePlace from './components/SinglePlace';
import People from './components/People';
import LunchContainer from './components/LunchContainer';
import LunchResult from './components/LunchResult';
import Home from './components/Home';

import store, { history } from './store.js';

import { Provider } from 'react-redux';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();
import 'react-toolbox/lib/commons.scss';
import './index.css';

// setInterval(() => store.dispatch({type:'ADD_PLACE', value: 'PLuto - ' + Date.now() }), 1000)

ReactDOM.render(
    <Provider store={store}>
        { /* Tell the Router to use our enhanced history */ }
        <Router history={history}>
          <Route path="/" component={AppContainer}>
            <IndexRoute component={Home} />
            <Route path="/places" component={Places}></Route>
            <Route path="/places/single" component={SinglePlace}></Route>
            <Route path="/people" component={People}></Route>
            <Route path="/lunch" component={LunchContainer}></Route>
            <Route path="/lunch/result" component={LunchResult}></Route>
          </Route>
        </Router>
    </Provider>
  ,
  document.getElementById('root')
);
