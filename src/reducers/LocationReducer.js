import actionTypes from '../actions/actionTypes';

export default function locationReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.CREATE_LOCATION:
            return state.concat({
                id: action.id,
                ...(action.inputLocation)
            });

        case actionTypes.UPDATE_LOCATION:
            return state.map( (location) => {
                return location.id === action.id ? { id: action.id, ...(action.inputLocation) } : location;
            });

        case actionTypes.DELETE_LOCATION:
            return state.filter( (location) => {
               return location.id !== action.id;
            });

        default:
            return state;
    }
}