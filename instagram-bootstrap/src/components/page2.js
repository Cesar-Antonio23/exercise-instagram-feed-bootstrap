import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import "../../src/styles/Alone.css";
function Page2(props) {
  return (
    <Container fluid>
      <Row className="alonePosts">
        <Col>
          <Card style={{ width: "35rem", height: "50rem" }}>
            <div className="tittle">
              <h2>Mi fisrt Photo</h2>
            </div>
            <div className="contador">
              <h2>4/10</h2>
            </div>
            <Card.Img
              className="cardImg"
              variant="top"
              src="https://picsum.photos/id/1015/200/300"
            />
            <Card.Body>
                <div>
                    <h6>23 Likes</h6>
                </div>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Page2;
