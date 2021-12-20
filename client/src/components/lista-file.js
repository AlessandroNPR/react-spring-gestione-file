import {Col, Row, Table} from "reactstrap";
import React from "react";

const ListaFile = props => {
    let {
        lista
    } = props
    return (
        <Row>
            <Col>
                <Table responsive={true} striped>
                    <thead>
                        <tr>
                            <th>Azioni</th>
                            <th>Nome file</th>
                        </tr>
                    </thead>
                    <tbody>
                    {lista &&
                    lista.map((file, index) => (
                        <tr key={index}>
                            <td></td>
                            <td><a href={file.url}>{file.name}</a></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default ListaFile