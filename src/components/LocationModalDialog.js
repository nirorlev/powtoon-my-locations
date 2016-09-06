import React from 'react';
import {Modal, Form, Col, ControlLabel, FormGroup, FormControl, InputGroup, Button} from 'react-bootstrap';


export default class LocationModalDialog extends React.Component {
    constructor(props) {
        super(props);
        this.updateModalNameField = this.updateModalNameField.bind(this);
        this.updateModalAddressField = this.updateModalAddressField.bind(this);
        this.updateModalLat = this.updateModalLat.bind(this);
        this.updateModalLong = this.updateModalLong.bind(this);
    }

    updateModalNameField(event) {
        this.props.onChangeHandler({
            name: event.target.value,
            address: this.props.address,
            coordinates: { lat: this.props.coordinates.lat, long: this.props.coordinates.long},
        });
    }

    updateModalAddressField(event) {
        this.props.onChangeHandler({
            name: this.props.name,
            address: event.target.value,
            coordinates: { lat: this.props.coordinates.lat, long: this.props.coordinates.long},
        });
    }

    updateModalLat(event) {
        this.props.onChangeHandler({
            name: this.props.name,
            address: this.props.address,
            coordinates: { lat: event.target.value, long: this.props.coordinates.long},
        });
    }

    updateModalLong(event) {
        this.props.onChangeHandler({
            name: this.props.name,
            address: this.props.address,
            coordinates: { lat: this.props.coordinates.lat, long: event.target.value},
        });
    }

    render() {
        const isNameValid = (this.props.name.length > 0);
        const isAddressValid = (this.props.address.length > 0);
        const isCoordinatesValid = (this.props.coordinates.lat && this.props.coordinates.long);
        const isFormValid = (isNameValid && isAddressValid && isCoordinatesValid);

        return (
            <Modal show={this.props.showModal} onHide={this.props.onCancelHandler}>
                <Form onSubmit={this.props.onSubmitHandler} horizontal>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.dialogTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup
                            validationState={isNameValid ? "success" : "warning"}>
                            <Col componentClass={ControlLabel} sm={2}>
                                Name
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text"
                                             value={this.props.name}
                                             placeholder="Enter location name..."
                                             onChange={this.updateModalNameField}/>
                            </Col>
                        </FormGroup>
                        <FormGroup
                            validationState={isAddressValid ? "success" : "warning"}>
                            <Col componentClass={ControlLabel} sm={2}>
                                Address
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text"
                                             value={this.props.address}
                                             placeholder="Enter address..."
                                             onChange={this.updateModalAddressField}/>
                            </Col>
                        </FormGroup>
                        <FormGroup
                            validationState={isCoordinatesValid ? "success" : "warning"}>
                            <Col componentClass={ControlLabel} sm={2}>
                                Coordinates
                            </Col>
                            <Col sm={5}>
                                <InputGroup>
                                    <InputGroup.Addon>Lat</InputGroup.Addon>
                                    <FormControl type="number"
                                                 min="-90" max="90" step="0.00001"
                                                 value={this.props.coordinates.lat}
                                                 placeholder="##.#####"
                                                 onChange={this.updateModalLat}/>
                                </InputGroup>
                            </Col>
                            <Col sm={5}>
                                <InputGroup>
                                    <InputGroup.Addon>Long</InputGroup.Addon>
                                    <FormControl type="number"
                                                 min="-180" max="180" step="0.00001"
                                                 value={this.props.coordinates.long}
                                                 placeholder="##.#####"
                                                 onChange={this.updateModalLong}/>
                                </InputGroup>
                            </Col>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" disabled={!isFormValid}>Submit</Button>
                        <Button onClick={this.props.onCancelHandler}>Cancel</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }
}
