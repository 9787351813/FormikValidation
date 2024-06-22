import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';

const Dashboard = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={10}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
