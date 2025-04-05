import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router";

const Navigation=()=>{
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as ={Link} to ="/">Asociacion de Desarrollo Angeles Sur</Navbar.Brand>
                <Navbar.Toggle aria-controls= "navbar-nav"/>
                <Navbar.Collapse id= "navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/about">Sobre Mí</Nav.Link>
                    <Nav.Link as={Link} to="/services">Actividades</Nav.Link>
                    <Nav.Link as={Link} to="/portfolio">Calendario</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>

    );
};
export default Navigation;