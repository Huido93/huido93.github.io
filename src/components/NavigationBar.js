import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavigationBar() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Welcome to My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#My Apps">My Apps</Nav.Link> */}
              <Nav.Link href="/information">Information</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavigationBar;
  