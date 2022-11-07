import React from "react";
import { Link } from "react-router-dom";

const SuperHome = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="content">
              <h3>Busca ResMan</h3>
              <p>
                Si eres dueño de un restaurante, puedes dar click en proseguir
                aqui abajo para mas informacion.
              </p>
              <Link to="register">Mas Info</Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <h3>Eres un comensal</h3>
              <p>
                Si eres comensal de alguno de los restaurantes afiliados a
                nuestra plataforma, ingresa aqui abajo.
              </p>
              <Link to="login">Ingresar</Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuperHome;
