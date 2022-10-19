import React from "react";
import BotonCalendario from "./BotonCalendario";
import BotonModificar from "./BotonModificar";
import BotonEliminar from "./BotonEliminar";
import { Link } from "react-router-dom";


const Tablas = ({num, nombre, precio, fecha}) => {
    return <tr>
    <td>{num}</td>
    <td>{nombre}</td>
    <td>{precio} Bs</td>
    <td>{fecha} <BotonCalendario/></td>
    <td><Link to={`/productos/editar/${num}`} className="btn"><BotonModificar/></Link></td>
    <td><BotonEliminar/></td>
  </tr>
};

export default Tablas