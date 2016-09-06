import actionTypes from '../actions/actionTypes';

export default function uiReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.SELECT_CATEGORY: {
            let categoryToSelect = (action.category === state.categories.selectedCategory ? null : action.category);
            return {
                ...state,
                categories: {...(state.categories), selectedCategory: categoryToSelect}
            };
        }

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
                categories: {
                    ...(state.categories),
                    showEditModal: action.showModal,
                    modalInputText: action.showModal ? state.categories.selectedCategory.name : state.categories.modalInputText
                }
            };

        case actionTypes.UPDATE_CATEGORY_MODAL_NAME_FIELD:
            return {
                ...state,
                categories: {...(state.categories), modalInputText: action.text}
            };


        case actionTypes.SELECT_LOCATION: {
            let locationToSelect = (action.location === state.locations.selectedLocation ? null : action.location);
            return {
                ...state,
                locations: {...(state.locations), selectedLocation: locationToSelect}
            };
        }

        default:
            return state;
    }
}