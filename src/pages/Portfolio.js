import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Portfolio = () => {
  return (
    <Container className="py-5">
      <h2>Portafolio</h2>
      <Row>
        <Col md={4}>
          <Image src="https://via.placeholder.com/300" fluid />
        </Col>
        <Col md={4}>
          <Image src="https://via.placeholder.com/300" fluid />
        </Col>
        <Col md={4}>
          <Image src="https://via.placeholder.com/300" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;