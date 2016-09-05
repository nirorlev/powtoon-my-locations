import actionTypes from '../actions/actionTypes';

export default function uiReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.SELECT_CATEGORY:
            return {
                ...state,
                categories: {...(state.categories), selectedId: action.id}
            };

        case actionTypes.TOGGLE_ADD_CATEGORY_MODAL:
            return {
                ...state,
                categories: {...(state.categories), showAddModal: action.showModal}
            };

        case actionTypes.TOGGLE_EDIT_CATEGORY_MODAL:
            return {
                ...state,
                categories: {...(state.categories), showEditModal: action.showModal}
            };

        default:
            return state;
    }
}