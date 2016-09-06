/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import { syncHistoryWithStore } from 'react-router-redux';
import { loadState, saveState } from './utils/localStorage';
import { throttle } from 'lodash';
import initialState from './store/initialState';
import initialUIState from './store/initialUIState';


// Initialize the store from localStorage or if undefined - we load from initialState on file.
// The UI state is not stored to localStorage, and therefore always loaded from file.
let initialStoreState = loadState() || initialState;
initialStoreState.ui = initialUIState;

const store = configureStore(initialStoreState);

// Storing the state to localStorage on any store change. We only store part of the state.
// Serializing the state to JSON is heavy, so we limit calls to saveState to 1 per second.
store.subscribe(throttle(() => {
    const {categories, locations} = store.getState();
    saveState({categories, locations});
}), 1000);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);
