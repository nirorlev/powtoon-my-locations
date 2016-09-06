import actionTypes from '../actions/actionTypes';

export default function uiReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.SELECT_LOCATION: {
            let locationToSelect = (action.location === state.selectedLocation ? null : action.location);
            return {
                ...state,
                selectedLocation: locationToSelect
            };
        }

        case actionTypes.TOGGLE_ADD_LOCATION_MODAL:
            return {
                ...state,
                showAddModal: action.showModal,
                modalInputText: action.showModal ? "" : state.modalInputText
            };

        case actionTypes.TOGGLE_EDIT_LOCATION_MODAL:
            return {
                ...state,
                showEditModal: action.showModal,
                modalInputText: action.showModal ? state.selectedLocation.name : state.modalInputText
            };

        case actionTypes.UPDATE_LOCATION_MODAL_NAME_FIELD:
            return {
                ...state,
                modalInputText: action.text
            };

        default:
            return state;
    }
}