import actionTypes from '../actions/actionTypes';

export default function uiReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.SELECT_CATEGORY: {
            let categoryToSelect = (action.category === state.selectedCategory ? null : action.category);
            return {
                ...state,
                selectedCategory: categoryToSelect
            };
        }

        case actionTypes.TOGGLE_ADD_CATEGORY_MODAL:
            return {
                ...state,
                showAddModal: action.showModal,
                modalInputText: action.showModal ? "" : state.modalInputText
            };

        case actionTypes.TOGGLE_EDIT_CATEGORY_MODAL:
            return {
                ...state,
                showEditModal: action.showModal,
                modalInputText: action.showModal ? state.selectedCategory.name : state.modalInputText
            };

        case actionTypes.UPDATE_CATEGORY_MODAL_NAME_FIELD:
            return {
                ...state,
                modalInputText: action.text
            };

        default:
            return state;
    }
}