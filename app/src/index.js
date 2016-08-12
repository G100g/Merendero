import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router'

import AppContainer from './components/AppContainer';
import Places from './components/Places';
import People from './components/People';
import Home from './components/Home';


import store, { history } from './store.js';

import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();



import './index.css';

// setInterval(() => store.dispatch({type:'ADD_PLACE', value: 'PLuto - ' + Date.now() }), 1000)

ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider>
        { /* Tell the Router to use our enhanced history */ }
        <Router history={history}>
          <Route path="/" component={AppContainer}>
            <IndexRoute component={Home} />
            <Route path="/places" component={Places}></Route>
            <Route path="/people" component={People}></Route>
          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider>
  ,
  document.getElementById('root')
);
