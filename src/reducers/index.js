import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import locationReducer from './LocationReducer';
import categoryReducer from './CategoryReducer';
import uiReducer from './UIReducer';

const rootReducer = combineReducers({
  locations: locationReducer,
  categories: categoryReducer,
  ui: uiReducer,
  routing: routerReducer
});

export default rootReducer;
