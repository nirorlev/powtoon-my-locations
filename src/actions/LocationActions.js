import actionTypes from './actionTypes';
import { v4 } from 'node-uuid';

export function createLocation(name, categoryId) {
    return {
        type: actionTypes.CREATE_LOCATION,
        id: v4(), // generate id in action to keep the reducer pure. use uuid and not a counter to support state reloads.
        name,
        categoryId
    };
}

export function updateLocation(id, name, categoryId) {
    return {
        type: actionTypes.UPDATE_LOCATION,
        id,
        name,
        categoryId
    };
}

export function deleteLocation(id) {
    return {
        type: actionTypes.DELETE_LOCATION,
        id
    };
}