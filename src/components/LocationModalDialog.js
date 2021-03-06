import React from 'react';
import {Modal, Form, Col, ControlLabel, FormGroup, FormControl, InputGroup, Button} from 'react-bootstrap';
import CategoryList from './CategoryList';


export default class LocationModalDialog extends React.Component {
    constructor(props) {
        super(props);
        this.updateModalNameField = this.updateModalNameField.bind(this);
        this.updateModalAddressField = this.updateModalAddressField.bind(this);
        this.updateModalLat = this.updateModalLat.bind(this);
        this.updateModalLong = this.updateModalLong.bind(this);
        this.updateModalCategory = this.updateModalCategory.bind(this);
    }

    updateModalNameField(event) {
        this.props.onChangeHandler({
            name: event.target.value,
            address: this.props.address,
            coordinates: this.props.coordinates,
            categoryId: this.props.categoryId
        });
    }

    updateModalAddressField(event) {
        this.props.onChangeHandler({
            name: this.props.name,
            address: event.target.value,
            coordinates: this.props.coordinates,
            categoryId: this.props.categoryId
        });
    }

    updateModalLat(event) {
        this.props.onChangeHandler({
            name: this.props.name,
            address: this.props.address,
            coordinates: {lat: Number(event.target.value), long: this.props.coordinates.long},
            categoryId: this.props.categoryId
        });
    }

    updateModalLong(event) {
        this.props.onChangeHandler({
            name: this.props.name,
            address: this.props.address,
            coordinates: {lat: this.props.coordinates.lat, long: Number(event.target.value)},
            categoryId: this.props.categoryId
        });
    }

    updateModalCategory(category) {
        this.props.onChangeHandler({
            name: this.props.name,
            address: this.props.address,
            coordinates: this.props.coordinates,
            categoryId: category ? category.id : null
        });
    }

    render() {
        const isNameValid = (this.props.name.length > 0);
        const isAddressValid = (this.props.address.length > 0);
        const isCoordinatesValid = (true);
        const isCategoryValid = (this.props.categoryId && this.props.categories.find((category) => category.id === this.props.categoryId));
        const isFormValid = (isNameValid && isAddressValid && isCoordinatesValid && isCategoryValid);

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
                        <FormGroup
                            validationState={isCategoryValid ? "success" : "warning"}>
                            <Col componentClass={ControlLabel} sm={2}>
                                Category
                            </Col>
                            <Col sm={10}>
                                <CategoryList categories={this.props.categories}
                                              selectedCategoryId={this.props.categoryId}
                                              clickHandler={this.updateModalCategory}
                                />
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

LocationModalDialog.propTypes = {
    dialogTitle: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    address: React.PropTypes.string.isRequired,
    coordinates: React.PropTypes.objectOf(React.PropTypes.number).isRequired,
    categoryId: React.PropTypes.string.isRequired,
    categories: React.PropTypes.array.isRequired,
    onChangeHandler: React.PropTypes.func,
    onCancelHandler: React.PropTypes.func,
    onSubmitHandler: React.PropTypes.func,
    showModal: React.PropTypes.bool.isRequired,
};
