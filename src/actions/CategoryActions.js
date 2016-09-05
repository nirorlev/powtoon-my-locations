import actionTypes from './actionTypes';
import { v4 } from 'node-uuid';

export function selectCategory(category) {
    return {
        type: actionTypes.SELECT_CATEGORY,
        category
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

export function updateCategoryModalTextField(text) {
    return {
        type: actionTypes.UPDATE_CATEGORY_MODAL_TEXT_FIELD,
        text
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