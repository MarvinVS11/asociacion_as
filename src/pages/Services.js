import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Services = () => {
  return (
    <Container className="py-5">
      <h2>Servicios</h2>
      <Row>
        <Col md={4}>
          <Card className="p-3">
            <Card.Body>
              <Card.Title>Diseño Web</Card.Title>
              <Card.Text>Creación de páginas web atractivas.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3">
            <Card.Body>
              <Card.Title>Desarrollo</Card.Title>
              <Card.Text>Programación de aplicaciones web.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3">
            <Card.Body>
              <Card.Title>SEO</Card.Title>
              <Card.Text>Optimización para motores de búsqueda.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;