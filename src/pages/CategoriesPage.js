import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Modal, Grid, Row, ButtonGroup, Button, Glyphicon} from 'react-bootstrap';
import CategoryList from '../components/CategoryList';
import * as actions from '../actions/CategoryActions';


class CategoriesPage extends React.Component {
    constructor(props) {
        super(props);
        this.openAddModal = this.openAddModal.bind(this);
        this.openEditModal = this.openEditModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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

    render() {
        return (
            <div>
                <Grid>
                    <h1>My Categories</h1>
                    <Row>
                        <ButtonGroup>
                            <Button onClick={this.openAddModal}><Glyphicon glyph="plus"/>Add</Button>
                            <Button><Glyphicon glyph="pencil"/>Edit</Button>
                            <Button><Glyphicon glyph="remove"/>Remove</Button>
                        </ButtonGroup>
                    </Row>
                    <Row>
                        <CategoryList categories={this.props.categories} selectedId={this.props.ui.selectedId}
                                      clickHandler={this.props.actions.selectCategory}/>
                    </Row>
                </Grid>

                <Modal show={this.props.ui.showAddModal || this.props.ui.showEditModal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.ui.showAddModal ? "Add" : "Edit"} Category</Modal.Title>
                    </Modal.Header>
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
