import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button
} from "react-bootstrap";
import "../../src/styles/Alone.css";

function NavBar() {
  return (
    <div>
      <Navbar bg="secondary" expand="lg">
      <i className=" insta-logo bi bi-instagram"></i>
        <Navbar.Brand href="#">Instagram</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{paddingLeft: '1400px'}}>
          <Form className="d-flex ">
            <Button variant="success">Create a new Post</Button>
          </Form>
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
