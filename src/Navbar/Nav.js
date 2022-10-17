import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap"
import '../CSS/Navbar.css'


function Navbaren() {
  return (
    <Navbar expand="lg" variant="dark" className="meny1">
      <Container>
        <Navbar.Brand href="/">CATS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Startpage</Nav.Link>
            <Nav.Link href="/Kittys">Kitty</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Navbaren