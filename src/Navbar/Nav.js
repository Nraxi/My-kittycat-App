import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap"



function Navbaren() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="meny1">
      <Container>
        <Navbar.Brand href="/">Kittys</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Startpage</Nav.Link>
            <Nav.Link href="/Kittys">Kitty</Nav.Link>
            <Nav.Link href="/user">User</Nav.Link>
            <br />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Navbaren