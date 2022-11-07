import React from "react";
import "../../styles/NavBar/NavBar.css";
import { Link } from "react-router-dom";
import inicioImage from "../../assets/icons/inicio.png";
import exitSesion from "../../assets/icons/exit.png";

import { useContext } from "react";
import UserContext from "../../context/UserContext";
const NavBar = () => {
  const { handleActive } = useContext(UserContext);
  let { active } = useContext(UserContext);

  return (
    <header className="header-tag">
      <nav className="header-nav-tag">
        <Link className="header-nav-link-tag" to="/">
          <figure className="figure-tag">
            <img className="image-tag" src={inicioImage} alt="Inicio" />
          </figure>
        </Link>

        {active === false ? (
          <React.Fragment>
            <Link className="header-nav-link-tag" to="functionalities">
              Funcionalidades
            </Link>
            <Link className="header-nav-link-tag" to="prices">
              Precios
            </Link>
            <Link className="header-nav-link-tag" to="about">
              Nosotros
            </Link>
            {
              //   <Link className="header-nav-link-tag" to="login">
              //   Iniciar Sesion
              // </Link>
              // <Link className="header-nav-link-tag" to="register">
              //   Pruebalo
              // </Link>
            }
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link className="header-nav-link-tag" to="superadmin">
              Dashboard
            </Link>
            <Link
              className="header-nav-link-tag"
              to="/"
              onClick={() => handleActive((active = false))}
            >
              <figure className="figure-tag">
                <img className="image-tag" src={exitSesion} alt="Inicio" />
              </figure>
            </Link>
          </React.Fragment>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
