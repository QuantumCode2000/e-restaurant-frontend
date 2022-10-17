import React from "react";
import "../../styles/NavBar/NavBar.css";
import { Link } from "react-router-dom";
import inicioImage from "../../assets/icons/inicio.png";
const NavBar = () => {
  return (
    <header className="header-tag">
      <nav className="header-nav-tag">
        <Link className="header-nav-link-tag" to="/">
          <figure className="figure-tag">
            <img className="image-tag" src={inicioImage} alt="Inicio" />
          </figure>
        </Link>
        <Link className="header-nav-link-tag" to="functionalities">
          Funcionalidades
        </Link>
        <Link className="header-nav-link-tag" to="prices">
          Precios
        </Link>
        <Link className="header-nav-link-tag" to="about">
          Nosotros
        </Link>
        <Link className="header-nav-link-tag" to="login">
          Iniciar Sesion
        </Link>
        <Link className="header-nav-link-tag" to="register">
          Pruebalo
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
