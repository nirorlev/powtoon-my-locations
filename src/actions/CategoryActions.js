import actionTypes from './actionTypes';
import { v4 } from 'node-uuid';

export function createCategory(name) {
    return {
        type: actionTypes.CREATE_CATEGORY,
        id: v4(), // generate id in action to keep the reducer pure. use uuid and not a counter to support state reloads.
        name
    };
}

export function updateCategory(id, name) {
    return {
        type: actionTypes.UPDATE_CATEGORY,
        id,
        name
    };
}

export function deleteCategory(id) {
    return {
        type: actionTypes.DELETE_CATEGORY,
        id
    };
}