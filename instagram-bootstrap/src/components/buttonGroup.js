import React from "react";
import { Row, Col, ButtonGroup, Button } from "react-bootstrap";

function Buttons() {
  return (
    <div>
      <Row >
        <Col className="d-flex justify-content-center">
          <ButtonGroup className="mt-3">
            <Button className="bg-secondary" href="/">1</Button>
            <Button className="bg-secondary" href="/alonePosts">2</Button>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
}

export default Buttons;
