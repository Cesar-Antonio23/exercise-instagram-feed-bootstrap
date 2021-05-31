import React from "react";
import { Row, Col, ButtonGroup, Button } from "react-bootstrap";

function Buttons() {
  return (
    <div>
      <Row >
        <Col className="d-flex justify-content-center">
          <ButtonGroup>
            <Button href="/">1</Button>
            <Button href="/alonePosts">2</Button>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
}

export default Buttons;
