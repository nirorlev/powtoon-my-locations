import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Locations from './components/LocationsList';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Locations}/>
    {/*<Route path="categories" component={CategoryList}/>*/}
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
