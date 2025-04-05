import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bannerImage from "../images/sitios_recreativos.jpg"

const Banner = () => {
  return (
    <div className="banner-container text-center">
    <img
      src={bannerImage}
      alt="Banner"
      className="img-fluid banner-image"
    />
    <div className="banner-text">
      <h1 className="display-4">Bienvenido a Nuestra Página</h1>
      <p className="lead">Explora el mejor contenido con nosotros</p>
    </div>
  </div>
  );
};

export default Banner;