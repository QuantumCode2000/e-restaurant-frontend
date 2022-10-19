import React from "react";
import Tablas from "./Tablas";

const TablasFinal = ({datosback}) => {
    return <table class="table table-dark table-hover">
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
        {datosback.map((recorrer)=>(
            <Tablas num={recorrer.id} nombre={recorrer.nombre} precio={recorrer.precio} fecha={recorrer.fecha}/>
        ))}
      
    </tbody>
  </table>
};

export default TablasFinal