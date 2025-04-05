import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <><div>
      <Banner />
    </div>
    <Container className="py-5">
        <h1>Asociacion Angeles Sur</h1>
        <p>Explora mis servicios y proyectos.</p>
      </Container></>
  );
};

export default Home;