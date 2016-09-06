import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Row, Col, ButtonGroup, Button, Glyphicon} from 'react-bootstrap';
import LocationList from '../components/LocationList';
import LocationModalDialog from '../components/LocationModalDialog';
import * as actions from '../actions/LocationActions';


class LocationsPage extends React.Component {
    constructor(props) {
        super(props);
        this.openAddModal = this.openAddModal.bind(this);
        this.openEditModal = this.openEditModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.createLocation = this.createLocation.bind(this);
        this.updateSelectedLocation = this.updateSelectedLocation.bind(this);
        this.removeSelectedLocation = this.removeSelectedLocation.bind(this);
    }

    openAddModal() {
        this.props.actions.toggleAddLocationModal(true);
    }

    openEditModal() {
        this.props.actions.toggleEditLocationModal(true);
    }

    closeModal() {
        this.props.actions.toggleAddLocationModal(false);
        this.props.actions.toggleEditLocationModal(false);
    }

    createLocation(event) {
        // this.props.actions.createLocation(this.props.ui.modalInputText);
        this.props.actions.toggleAddLocationModal(false);
        event.preventDefault();
    }

    updateSelectedLocation(event) {
        // this.props.actions.updateLocation(this.props.ui.selectedLocation.id, this.props.ui.modalInputText);
        this.props.actions.toggleEditLocationModal(false);
        event.preventDefault();
    }

    removeSelectedLocation() {
        this.props.actions.deleteLocation(this.props.ui.selectedLocation.id);
        this.props.actions.selectLocation(null);
    }


    render() {
        return (
            <div>
                <Grid fluid>
                    <Row>
                        <Col xs={12}>
                            <h1>My Locations</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <ButtonGroup>
                                <Button onClick={this.openAddModal}><Glyphicon glyph="plus"/>Add</Button>
                                <Button disabled={!this.props.ui.selectedLocation}
                                        onClick={this.openEditModal}><Glyphicon glyph="pencil"/>Edit</Button>
                                <Button disabled={!this.props.ui.selectedLocation}
                                        onClick={this.removeSelectedLocation}><Glyphicon glyph="remove"/>Remove</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <LocationList locations={this.props.locations}
                                          categories={this.props.categories}
                                          selectedLocation={this.props.ui.selectedLocation}
                                          clickHandler={this.props.actions.selectLocation}
                            />
                        </Col>
                    </Row>
                </Grid>

                <LocationModalDialog key="addLocationModal"
                                     showModal={this.props.ui.showAddModal}
                                     dialogTitle="Add Location"
                                     name={this.props.ui.modalName}
                                     address={this.props.ui.modalAddress}
                                     coordinates={this.props.ui.modalCoordinates}
                                     onCancelHandler={this.closeModal}
                                     onSubmitHandler={this.createLocation}
                                     onChangeHandler={this.props.actions.updateLocationModalDialog}
                />

                <LocationModalDialog key="editLocationModal"
                                     showModal={this.props.ui.showEditModal}
                                     dialogTitle="Edit Location"
                                     name={this.props.ui.modalName}
                                     address={this.props.ui.modalAddress}
                                     coordinates={this.props.ui.modalCoordinates}
                                     onCancelHandler={this.closeModal}
                                     onSubmitHandler={this.updateSelectedLocation}
                                     onChangeHandler={this.props.actions.updateLocationModalDialog}
                />

            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        locations: state.locations,
        categories: state.categories,
        ui: state.ui.locations
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationsPage);