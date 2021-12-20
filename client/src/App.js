import React, {Component, useState} from "react";
import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadService from "./services/upload-files.service";
import ListaFile from "./components/lista-file"
import Upload from "./components/upload";
import {Button} from 'reactstrap'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFiles: undefined,
            currentFile: undefined,
            progress: 0,
            message: "",
            documento: {},
            listaFile: [],
        };
    }

    getFiles = () => {
        return new Promise((resolve, reject) => {
            UploadService.getFiles().then((response) => {
                this.setState({
                    listaFile: response.data,
                });
                resolve(true)
            }).catch(() => resolve(false));
        })
    }

    aggiungiDocumento = (value) => {
        this.setState({nuovoDocumento: value})
    }

    upload = (file) => {
        return new Promise((resolve, reject) => {
            UploadService.upload(file, (event) => {
                this.setState({
                    progress: Math.round((100 * event.loaded) / event.total),
                });
            }).then((response) => {
                this.setState({
                    message: response.data.message,
                });
                this.getFiles().then((data) => resolve(data));
            }).catch(() => {
                this.setState({
                    progress: 0,
                    message: "Could not upload the file!",
                });
                reject()
            });
        })
    }

    componentDidMount() {
        this.getFiles()
    }

    render() {
        return (
            <div className="container" style={{ width: "600px" }}>
                {/*INPUT*/}
                {!this.state.nuovoDocumento && <div style={{textAlign: 'center', margin: '2rem'}}>
                    <Button onClick={() => this.aggiungiDocumento(true)}>Aggiungi nuovo documento</Button>
                </div>}
                {this.state.nuovoDocumento && <Upload cancel={this.aggiungiDocumento} message={this.state.message} progress={this.state.progress} upload={this.upload}/>}
                {/*LISTA FILE*/}
                {this.state.listaFile && this.state.listaFile.length > 0 && <ListaFile lista={this.state.listaFile}/>}
            </div>
        )
    }
}

export default App;
