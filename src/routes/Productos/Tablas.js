import React from "react";
import BotonCalendario from "./BotonCalendario";
import BotonModificar from "./BotonModificar";
import BotonEliminar from "./BotonEliminar";

const Tablas = ({num, nombre, precio, fecha}) => {
    return <tr>
    <td>{num}</td>
    <td>{nombre}</td>
    <td>{precio} Bs</td>
    <td>{fecha} <BotonCalendario/></td>
    <td><BotonModificar/></td>
    <td><BotonEliminar/></td>
  </tr>
};

export default Tablas