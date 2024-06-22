// Sidebar.jsx
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/books">Books</Nav.Link>
        <Nav.Link as={Link} to="/authors">Authors</Nav.Link>
        <Nav.Link as={Link} to="/users">Users</Nav.Link>
        <Nav.Link as={Link} to="/libraries">Libraries</Nav.Link>
        <Nav.Link as={Link} to="/management">Management</Nav.Link>
        <Nav.Link as={Link} to="/details">Details</Nav.Link>
        <Nav.Link as={Link} to="/Specification">Specification</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
