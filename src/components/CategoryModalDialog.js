import React from 'react';
import {Modal, FormGroup, FormControl, Button} from 'react-bootstrap';


export default class CategoryModalDialog extends React.Component {
    constructor(props) {
        super(props);
        this.updateModalTextField = this.updateModalTextField.bind(this);
    }

    updateModalTextField(event) {
        this.props.onTextChangeHandler(event.target.value);
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
                            validationState={this.props.inputText.length > 0 ? "success" : "warning"}>
                            <FormControl type="text"
                                         value={this.props.inputText}
                                         placeholder="Enter category name..."
                                         onChange={this.updateModalTextField}/>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" disabled={this.props.inputText.length === 0}>Submit</Button>
                        <Button onClick={this.props.onCancelHandler}>Cancel</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        );
    }
}

CategoryModalDialog.propTypes = {
    dialogTitle: React.PropTypes.string.isRequired,
    inputText: React.PropTypes.string.isRequired,
    onTextChangeHandler: React.PropTypes.func,
    onCancelHandler: React.PropTypes.func,
    onSubmitHandler: React.PropTypes.func,
    showModal: React.PropTypes.bool.isRequired,
};
