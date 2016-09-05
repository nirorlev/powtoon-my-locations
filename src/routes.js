import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import Categories from './pages/CategoriesPage';
import Locations from './pages/LocationsPage';
import NotFoundPage from './pages/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Locations}/>
    <Route path="categories" component={Categories} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
