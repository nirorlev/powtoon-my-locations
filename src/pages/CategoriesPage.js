import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Row, Col, ButtonGroup, Button, Glyphicon} from 'react-bootstrap';
import CategoryList from '../components/CategoryList';
import CategoryModalDialog from '../components/CategoryModalDialog';
import * as actions from '../actions/CategoryActions';


class CategoriesPage extends React.Component {
    constructor(props) {
        super(props);
        this.openAddModal = this.openAddModal.bind(this);
        this.openEditModal = this.openEditModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.createCategory = this.createCategory.bind(this);
        this.updateSelectedCategory = this.updateSelectedCategory.bind(this);
        this.removeSelectedCategory = this.removeSelectedCategory.bind(this);
    }

    openAddModal() {
        this.props.actions.toggleAddCategoryModal(true);
    }

    openEditModal() {
        this.props.actions.toggleEditCategoryModal(true);
    }

    closeModal() {
        this.props.actions.toggleAddCategoryModal(false);
        this.props.actions.toggleEditCategoryModal(false);
    }

    createCategory(event) {
        this.props.actions.createCategory(this.props.ui.modalInputText);
        this.props.actions.toggleAddCategoryModal(false);
        event.preventDefault();
    }

    updateSelectedCategory(event) {
        this.props.actions.updateCategory(this.props.ui.selectedCategory.id, this.props.ui.modalInputText);
        this.props.actions.toggleEditCategoryModal(false);
        event.preventDefault();
    }

    removeSelectedCategory() {
        this.props.actions.deleteCategory(this.props.ui.selectedCategory.id);
        this.props.actions.selectCategory(null);
    }

    render() {
        return (
            <div>
                <Grid fluid>
                    <Row>
                        <Col xs={12}>
                            <h1>My Categories</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <ButtonGroup>
                                <Button onClick={this.openAddModal}><Glyphicon glyph="plus"/>Add</Button>
                                <Button disabled={!this.props.ui.selectedCategory}
                                        onClick={this.openEditModal}><Glyphicon glyph="pencil"/>Edit</Button>
                                <Button disabled={!this.props.ui.selectedCategory}
                                        onClick={this.removeSelectedCategory}><Glyphicon glyph="remove"/>Remove</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <CategoryList categories={this.props.categories}
                                          selectedCategoryId={this.props.ui.selectedCategory ? this.props.ui.selectedCategory.id : null}
                                          clickHandler={this.props.actions.selectCategory}
                            />
                        </Col>
                    </Row>
                </Grid>

                <CategoryModalDialog key="addCategoryModal"
                                     showModal={this.props.ui.showAddModal}
                                     dialogTitle="Add Category"
                                     inputText={this.props.ui.modalInputText}
                                     onCancelHandler={this.closeModal}
                                     onSubmitHandler={this.createCategory}
                                     onTextChangeHandler={this.props.actions.updateCategoryModalTextField}
                />

                <CategoryModalDialog key="editCategoryModal"
                                     showModal={this.props.ui.showEditModal}
                                     dialogTitle="Edit Category"
                                     inputText={this.props.ui.modalInputText}
                                     onCancelHandler={this.closeModal}
                                     onSubmitHandler={this.updateSelectedCategory}
                                     onTextChangeHandler={this.props.actions.updateCategoryModalTextField}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        ui: state.ui.categories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
