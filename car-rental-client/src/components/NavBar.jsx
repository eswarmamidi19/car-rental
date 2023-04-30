import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{background:"#333"}}>
      <Container>
        <Navbar.Brand><span style={{fontSize:"2.6rem",fontFamily:"monospace",color:"#fff"}}>CarIt.</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color:"white", background:"white"}} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav> 
          <Nav>
            <Nav.Link style={{fontSize:"1.9rem",fontFamily:"monospace",color:"#fff" }} >Home</Nav.Link>
            <Nav.Link style={{fontSize:"1.9rem",fontFamily:"monospace",color:"#fff"}}>Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
