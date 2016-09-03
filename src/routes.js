import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import Categories from './pages/Categories';
import Locations from './pages/Locations';
import NotFoundPage from './pages/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Locations}/>
    <Route path="categories" component={Categories} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
