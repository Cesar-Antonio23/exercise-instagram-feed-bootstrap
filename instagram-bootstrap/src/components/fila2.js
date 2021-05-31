import React from 'react'
import {Row, Col} from 'react-bootstrap'

function Fila2() {
    return (
        <div>
            <Row className = "pb-1">
                <Col className = "col-3" >
                <img src='https://picsum.photos/id/101/500/300'/>
                </Col>
                <Col className = "col-3" style={{paddingLeft: '35px'}}>
                <img src='https://picsum.photos/id/1001/500/300'/>
                </Col>
                <Col className = "col-3" style={{paddingLeft: '55px'}}>
                <img src='https://picsum.photos/id/1002/500/300'/>
                </Col>
                <Col className = "col-3" style={{paddingLeft: '75px'}}>
                <img src='https://picsum.photos/id/1005/500/300'/>
                </Col>
            </Row>
        </div>
    )
}

export default Fila2