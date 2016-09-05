import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import CategoriesPage from './pages/CategoriesPage';
import LocationsPage from './pages/LocationsPage';
import NotFoundPage from './pages/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LocationsPage}/>
    <Route path="categories" component={CategoriesPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
