import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav.css";

function Navs() {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/images/logo.png" alt=""></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About US</Nav.Link>
              <Nav.Link>Explore Food</Nav.Link>
              <Nav.Link>Reviews</Nav.Link>
              <Nav.Link>FAQ</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="btnX">Contact US </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navs;
