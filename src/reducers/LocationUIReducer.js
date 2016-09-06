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
                modalAddress: action.showModal ? "" : state.modalAddress,
                modalCoordinates: action.showModal ? {lat: 32.0662, long: 34.7778} : state.modalCoordinates,
                modalCategoryId: action.showModal ? null : state.modalCategoryId
            };

        case actionTypes.TOGGLE_EDIT_LOCATION_MODAL:
            return {
                ...state,
                showEditModal: action.showModal,
                modalName: action.showModal ? state.selectedLocation.name : state.modalName,
                modalAddress: action.showModal ? state.selectedLocation.address : state.modalAddress,
                modalCoordinates: action.showModal ? state.selectedLocation.coordinates : state.modalCoordinates,
                modalCategoryId: action.showModal ? state.selectedLocation.categoryId : state.modalCategoryId
            };

        case actionTypes.UPDATE_LOCATION_MODAL_INPUT:
            return {
                ...state,
                modalName: action.inputLocation.name,
                modalAddress: action.inputLocation.address,
                modalCoordinates: action.inputLocation.coordinates,
                modalCategoryId: action.inputLocation.categoryId
            };

        default:
            return state;
    }
}