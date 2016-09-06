import React from 'react';
import {Modal, FormGroup, FormControl, Button} from 'react-bootstrap';


export default class LocationModalDialog extends React.Component {
    constructor(props) {
        super(props);
        this.updateModalNameField = this.updateModalNameField.bind(this);
        this.updateModalAddressField = this.updateModalAddressField.bind(this);
    }

    updateModalNameField(event) {
        this.props.onChangeHandler({
            name: event.target.value,
            address: this.props.address,
        });
    }

    updateModalAddressField(event) {
        this.props.onChangeHandler({
            name: this.props.name,
            address: event.target.value,
        });
    }

    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.onCancelHandler}>
                <form onSubmit={this.props.onSubmitHandler}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.dialogTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup
                            validationState={this.props.name.length > 0 ? "success" : "warning"}>
                            <FormControl type="text"
                                         value={this.props.name}
                                         placeholder="Enter location name..."
                                         onChange={this.updateModalNameField}/>
                        </FormGroup>
                        <FormGroup
                            validationState={this.props.address.length > 0 ? "success" : "warning"}>
                            <FormControl type="text"
                                         value={this.props.address}
                                         placeholder="Enter address..."
                                         onChange={this.updateModalAddressField}/>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" disabled={this.props.name.length === 0}>Submit</Button>
                        <Button onClick={this.props.onCancelHandler}>Cancel</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        );
    }
}
