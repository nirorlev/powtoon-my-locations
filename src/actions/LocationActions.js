import actionTypes from './actionTypes';
import { v4 } from 'node-uuid';

export function selectLocation(location) {
    return {
        type: actionTypes.SELECT_LOCATION,
        location
    };
}

export function toggleAddLocationModal(showModal) {
    return {
        type: actionTypes.TOGGLE_ADD_LOCATION_MODAL,
        showModal
    };
}

export function toggleEditLocationModal(showModal) {
    return {
        type: actionTypes.TOGGLE_EDIT_LOCATION_MODAL,
        showModal
    };
}

export function updateLocationModalDialog(inputLocation) {
    return {
        type: actionTypes.UPDATE_LOCATION_MODAL_INPUT,
        inputLocation
    };
}


export function createLocation(inputLocation) {
    return {
        type: actionTypes.CREATE_LOCATION,
        id: v4(), // generate id in action to keep the reducer pure. use uuid and not a counter to support state reloads.
        inputLocation
    };
}

export function updateLocation(id, inputLocation) {
    return {
        type: actionTypes.UPDATE_LOCATION,
        id,
        inputLocation
    };
}

export function deleteLocation(id) {
    return {
        type: actionTypes.DELETE_LOCATION,
        id
    };
}