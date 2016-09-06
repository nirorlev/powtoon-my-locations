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
                modalName: action.showModal ? "" : state.modalName,
                modalAddress: action.showModal ? "" : state.modalAddress
            };

        case actionTypes.TOGGLE_EDIT_LOCATION_MODAL:
            return {
                ...state,
                showEditModal: action.showModal,
                modalName: action.showModal ? state.selectedLocation.name : state.modalName,
                modalAddress: action.showModal ? state.selectedLocation.address : state.modalAddress
            };

        case actionTypes.UPDATE_LOCATION_MODAL_INPUT:
            return {
                ...state,
                modalName: action.inputLocation.name,
                modalAddress: action.inputLocation.address
            };

        default:
            return state;
    }
}