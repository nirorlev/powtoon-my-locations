import actionTypes from './actionTypes';
import { v4 } from 'node-uuid';

export function selectCategory(id) {
    return {
        type: actionTypes.SELECT_CATEGORY,
        id
    };
}

export function toggleAddCategoryModal(showModal) {
    return {
        type: actionTypes.TOGGLE_ADD_CATEGORY_MODAL,
        showModal
    };
}

export function toggleEditCategoryModal(showModal) {
    return {
        type: actionTypes.TOGGLE_EDIT_CATEGORY_MODAL,
        showModal
    };
}


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