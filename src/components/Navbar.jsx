import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure the correct CSS file is imported

const Navbar = () => {
  return (
    <BootstrapNavbar className="custom-navbar" expand="lg">
      <BootstrapNavbar.Brand as={Link} to="/" className="mx-auto">Library Dashboard</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav>
          <Nav.Link as={Link} to="/books">Books</Nav.Link>
          <Nav.Link as={Link} to="/authors">Authors</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
