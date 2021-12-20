import {Button, Col, Container, CustomInput, Label, Row} from "reactstrap";
import React, {Fragment, useState} from "react";
import UploadService from "../services/upload-files.service";
import ModalInfo from "../modal/ModalInfo";
const Upload = props => {
    const [documento, setDocumento] = useState({})
    const [startUpload, setStartUpload] = useState()
    const [modalBody, setModalBody] = useState()
    const selectFile = (event) => {
        if (event.target.files && event.target.files[0])
            setDocumento({nomeFile: event.target.files[0].name, doc: event.target.files[0]})
        else setDocumento()
    }

    const upload = () => {
        setStartUpload(true)
        props.upload(documento.doc).then(data => {
            if (data === true) {
                setDocumento()
                setStartUpload()
                setModalBody("Salvataggio documento avvenuto con successo")
            } else {
                setModalBody(props.message)
            }
        }).catch(() => {

        })
    }

    const closeModal = () => {
        setModalBody()
    }

    return <Fragment>
        {modalBody && <ModalInfo closeModal={() => closeModal()} modalHeader="Attenzione!" modalBody={modalBody} />}
        <Row>
            <Col style={{margin: '1rem'}}>
                <Label>File da inserire</Label>
                <CustomInput label={documento && documento.nomeFile ? documento.nomeFile : "Seleziona un file"} type="file"
                             id="tempAcc" onChange={selectFile}/>
                {startUpload && (
                    <div className="progress">
                        <div
                            className="progress-bar progress-bar-info progress-bar-striped"
                            role="progressbar"
                            aria-valuenow={props.progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: props.progress + "%" }}>
                            {props.progress}%
                        </div>
                    </div>
                )}
            </Col>
        </Row>
        <Row>
            <Col style={{textAlign: 'center', margin: '1rem', marginTop: 0}}>
                <Button style={{width: '100%'}} color="primary" disabled={!(documento && documento.doc) || !documento} onClick={upload}>
                    Upload
                </Button>
            </Col>
            <Col>
                <Button style={{width: '100%'}} color="primary" onClick={() => props.cancel()}>
                    Annulla
                </Button>
            </Col>
        </Row>
        <Row>
            <Col style={{textAlign: 'center', margin: '1rem', marginTop: 0}}>
                <div className="alert alert-light" role="alert">
                    {props.message}
                </div>
            </Col>
        </Row>
    </Fragment>
}

export default Upload