import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Row, Col, ButtonGroup, Button, Glyphicon} from 'react-bootstrap';
import LocationList from '../components/LocationList';
// import LocationModalDialog from '../components/LocationModalDialog';
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
        // this.props.actions.deleteLocation(this.props.ui.selectedLocation.id);
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
                                          selectedLocation={this.props.ui.selectedLocation}
                                          clickHandler={this.props.actions.selectLocation}
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        locations: state.locations,
        ui: state.ui.locations
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationsPage);