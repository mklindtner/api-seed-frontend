import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
import { withRouter } from "react-router";


export class ModalEditItem extends Component {
    constructor(props) {
        super(props);
    }

    handleClose = () => {
        this.props.history.push('/table');
    }

    render() {
        return (
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>{this.props.id}</Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                        <Button bsStyle="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        );
    }
}

export default withRouter(ModalEditItem);