import React from "react";
import { Row, Col, ButtonGroup, Button } from "react-bootstrap";

function Buttons() {
  return (
    <div>
      <Row >
        <Col className="d-flex justify-content-center">
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
}

export default Buttons;
