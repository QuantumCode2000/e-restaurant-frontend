import React from "react";

const CardRestaurantes = ({
  fecha,
  nombreRestaurante,
  descripcionRestaurante,
  dueno,
  cantProductos,
  cantClientes,
  cantSucursales,
}) => {
  return (
    <div className="card">
      <div className="card-text">
        <span className="date">{fecha}</span>
        <br />
        <span className="date">{dueno}</span>

        <h2>{nombreRestaurante}</h2>
        <p>{descripcionRestaurante}</p>
      </div>
      <div className="card-stats">
        <div className="stat">
          <div className="value">{cantProductos}</div>
          <div className="type">productos</div>
        </div>
        <div className="stat border">
          <div className="value">{cantClientes}</div>
          <div className="type">clientes</div>
        </div>
        <div className="stat">
          <div className="value">{cantSucursales}</div>
          <div className="type">sucursales</div>
        </div>
      </div>
    </div>
  );
};

export default CardRestaurantes;
