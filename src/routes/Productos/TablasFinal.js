import React from "react";
import Tablas from "./Tablas";

const TablasFinal = () => {
    return <table class="table">
    <thead>
      <tr>
        <th scope="col">Nro</th>
        <th scope="col">Nombre de Producto</th>
        <th scope="col">Precio</th>
        <th scope="col">Fechas</th>
        <th scope="col">Modificar</th>
        <th scope="col">Eliminar</th>
      </tr>
    </thead>
    <tbody>
      <Tablas num="1" nombre="Chicharron" precio="45" fecha="19/10/22" />
      <Tablas num="2" nombre="Saice" precio="20" fecha="19/10/22" />
      <Tablas num="3" nombre="Sajta de Pollo" precio="30" fecha="19/10/22" />
      <Tablas num="4" nombre="Sopa de mani" precio="15" fecha="20/10/22" />
      <Tablas num="5" nombre="Chairo" precio="15" fecha="20/10/22" />
      <Tablas num="6" nombre="Thimpu" precio="25" fecha="21/10/22" />
      <Tablas num="7" nombre="Majadito" precio="30" fecha="21/10/22" />
    </tbody>
  </table>
};

export default TablasFinal