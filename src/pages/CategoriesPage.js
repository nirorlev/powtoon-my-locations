import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FormGroup, FormControl, Modal, Grid, Row, ButtonGroup, Button, Glyphicon} from 'react-bootstrap';
import CategoryList from '../components/CategoryList';
import * as actions from '../actions/CategoryActions';


class CategoriesPage extends React.Component {
    constructor(props) {
        super(props);
        this.openAddModal = this.openAddModal.bind(this);
        this.openEditModal = this.openEditModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.updateModalTextField = this.updateModalTextField.bind(this);
        this.createCategory = this.createCategory.bind(this);
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

    updateModalTextField(event) {
        this.props.actions.updateCategoryModalTextField(event.target.value);
    }

    createCategory(event) {
        event.preventDefault();
        this.props.actions.createCategory(this.props.ui.modalInputText);
        this.props.actions.toggleAddCategoryModal(false);
    }

    removeSelectedCategory() {
        this.props.actions.deleteCategory(this.props.ui.selectedId);
        this.props.actions.selectCategory(null);
    }

    render() {
        return (
            <div>
                <Grid>
                    <h1>My Categories</h1>
                    <Row>
                        <ButtonGroup>
                            <Button onClick={this.openAddModal}><Glyphicon glyph="plus"/>Add</Button>
                            <Button disabled={!this.props.ui.selectedId}><Glyphicon glyph="pencil"/>Edit</Button>
                            <Button disabled={!this.props.ui.selectedId} onClick={this.removeSelectedCategory}><Glyphicon glyph="remove"/>Remove</Button>
                        </ButtonGroup>
                    </Row>
                    <Row>
                        <CategoryList categories={this.props.categories} selectedId={this.props.ui.selectedId}
                                      clickHandler={this.props.actions.selectCategory}/>
                    </Row>
                </Grid>

                <Modal show={this.props.ui.showAddModal || this.props.ui.showEditModal} onHide={this.closeModal}>
                    <form onSubmit={this.createCategory}>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.props.ui.showAddModal ? "Add" : "Edit"} Category</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormGroup validationState={this.props.ui.modalInputText.length > 0 ? "success" : "warning"}>
                                <FormControl type="text"
                                             value={this.props.ui.modalInputText}
                                             placeholder="Enter category name..."
                                             onChange={this.updateModalTextField} />
                            </FormGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit" disabled={this.props.ui.modalInputText.length === 0}>Submit</Button>
                            <Button onClick={this.closeModal}>Cancel</Button>
                        </Modal.Footer>
                    </form>
                </Modal>
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
