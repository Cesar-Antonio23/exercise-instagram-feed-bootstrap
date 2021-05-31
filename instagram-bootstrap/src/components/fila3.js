import React from 'react'
import {Row, Col} from 'react-bootstrap'

function Fila3() {
    return (
        <div>
            <Row>
                <Col className = "col-3">
                <img src='https://picsum.photos/id/50/500/300'/>
                </Col>
                <Col className = "col-3" style={{paddingLeft: '35px'}}>
                <img src='https://picsum.photos/id/106/500/300'/>
                </Col>
                <Col className = "col-3" style={{paddingLeft: '55px'}}>
                <img src='https://picsum.photos/id/190/500/300'/>
                </Col>
                <Col className = "col-3" style={{paddingLeft: '75px'}}>
                <img src='https://picsum.photos/id/1004/500/300'/>
                </Col>
            </Row>
        </div>
    )
}

export default Fila3