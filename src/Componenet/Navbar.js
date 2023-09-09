import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  NavLink  ,Link } from "react-router-dom";

function Navba() {
  const common ={
    marginRight:15,
    
  }
  return (
    <div>   <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="auto">
      
            <NavLink to="/home" className="text-decoration-none" style={common}>Home</NavLink>
            <NavLink to="/about" className="text-decoration-none" style={common}>About</NavLink>
            <NavLink to="/project" className="text-decoration-none" style={common}>project</NavLink>
            <NavLink to="/contact" className="text-decoration-none" style={common}>Contact</NavLink>
          </Nav>
        </Container>
      </Navbar>
      <br />
     </div>
  )
}

export default Navba