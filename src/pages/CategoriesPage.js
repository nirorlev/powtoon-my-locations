import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CategoryList from '../components/CategoryList';
import * as actions from '../actions/CategoryActions';


const CategoriesPage = (props) => {
        return (
            <div>
                <h1>My Categories</h1>
                <CategoryList categories={props.categories} selectedCategoryId={props.ui.selectedCategoryId} clickHandler={props.actions.selectCategory}/>
            </div>
        );
};


function mapStateToProps(state) {
    return {
        categories: state.categories,
        ui: state.ui
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
