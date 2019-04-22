import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import PropTypes from "prop-types"

class MyModal extends Component {
    render() {
        const { modalOpen, handleClose, closeModal, onSubmit } = this.props
        return (
            <Modal
                open={modalOpen}
                onClose={() => handleClose()}
                size='tiny'
                style={{
                    marginTop: '5%',
                    marginLeft:'31%',
                    marginRight:'29%',
                    height:"55%",
                    width:"40%"
                  }}
                  >
                <Modal.Header>
                    <Header>{this.props.header}
                    <Button type="button" onClick={() => closeModal()} className="close">
                        <span aria-hidden="true">&times;</span>
                    </Button>
                    </Header>
                </Modal.Header>
                <Modal.Content >
                    {this.props.content}
                </Modal.Content>
                <Modal.Actions>
                    <Button type="button" onClick={() => closeModal()} >Close</Button>
                    <Button type="button" color='green' onClick={() => onSubmit()} data-dismiss="modal">Post</Button>
                </Modal.Actions>

            </Modal>
        )
    }
}

MyModal.propTypes = {
    // modalOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default MyModal