import actionTypes from '../actions/actionTypes';

export default function uiReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.SELECT_CATEGORY:
            let idToSelect = (action.id === state.categories.selectedId ? null : action.id);
            return {
                ...state,
                categories: {...(state.categories), selectedId: idToSelect}
            };

        case actionTypes.TOGGLE_ADD_CATEGORY_MODAL:
            return {
                ...state,
                categories: {
                    ...(state.categories),
                    showAddModal: action.showModal,
                    modalInputText: action.showModal ? "" : state.categories.modalInputText
                },
            };

        case actionTypes.TOGGLE_EDIT_CATEGORY_MODAL:
            return {
                ...state,
                categories: {...(state.categories), showEditModal: action.showModal}
            };

        case actionTypes.UPDATE_CATEGORY_MODAL_TEXT_FIELD:
            return {
                ...state,
                categories: {...(state.categories), modalInputText: action.text}
            };

        default:
            return state;
    }
}