import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import locationReducer from './LocationReducer';
import categoryReducer from './CategoryReducer';

const rootReducer = combineReducers({
  locationReducer,
  categoryReducer,
  routing: routerReducer
});

export default rootReducer;
