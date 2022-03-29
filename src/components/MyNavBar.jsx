import React from "react";
import { Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

export default function MyNavBar() {


  return (
    <>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Ramé Botánicos</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <NavDropdown title="Menu" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">BOTANICOS</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">PRODUCTOS</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">CONTACTANOS</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    
 </>
  );
}
