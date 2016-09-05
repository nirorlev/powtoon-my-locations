import actionTypes from '../actions/actionTypes';
import initialState from './initialState';


export default function categoryReducer(state = initialState.categories, action) {
    switch (action.type) {
        case actionTypes.CREATE_CATEGORY:
            return state.concat({
                id: action.id,
                name: action.name
            });

        case actionTypes.UPDATE_CATEGORY:
            return state.map((category) => {
                return category.id === action.id ? {id: action.id, name: action.name} : category;
            });

        case actionTypes.DELETE_CATEGORY:
            return state.filter((category) => {
                return category.id !== action.id;
            });

        default:
            return state;
    }
}