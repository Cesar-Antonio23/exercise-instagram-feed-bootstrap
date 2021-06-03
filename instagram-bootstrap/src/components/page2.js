import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import "../../src/styles/Alone.css";


function Page2() {
  return (
    <Container>
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
              <Row>
                <Col className="col-1">
                <i className="heart bi bi-heart"></i>
                </Col>
                <Col className="col-3">
                <h6>Comment...</h6>
                </Col>
                <Col className=" dots col-1">
                <i class="bi bi-three-dots-vertical"></i>
                </Col>
              </Row>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Page2;
