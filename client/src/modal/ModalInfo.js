import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalInfo = (props) => {
    let {
        closeModal,
        modalHeader,
        modalBody
    } = props

    const toggle = () => {
        closeModal();
    }

    return (
        <Modal isOpen={true} toggle={toggle} bSize='lg'>
            <ModalHeader toggle={toggle}>
                {modalHeader}
            </ModalHeader>
            <ModalBody>
                <p>{modalBody}</p>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>Chiudi</Button>
            </ModalFooter>
        </Modal>
    )
}
export default ModalInfo

