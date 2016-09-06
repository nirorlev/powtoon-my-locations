import { combineReducers } from 'redux';
import locationUIReducer from './LocationUIReducer';
import categoryUIReducer from './CategoryUIReducer';

const uiReducer = combineReducers({
    locations: locationUIReducer,
    categories: categoryUIReducer,
});

export default uiReducer;
