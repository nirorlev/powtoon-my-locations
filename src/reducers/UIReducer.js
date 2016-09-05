import actionTypes from '../actions/actionTypes';


export default function uiReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.SELECT_CATEGORY:
            return {
                ...state,
                selectedCategoryId: action.id
            };

        default:
            return state;
    }
}