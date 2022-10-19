import React from "react";
import { CardRestaurantes } from "../../components";
import { restaurantes } from "../../utils";
import "../../styles/ListRestaurant/ListRestaurant.css";
const ListRestaurant = () => {
  return (
    <React.Fragment>
      <div>
        {restaurantes.restaurantes.map((item) => (
          <CardRestaurantes
            fecha={item.fechaDeIngreso}
            nombreRestaurante={item.nombreRestaurante}
            descripcionRestaurante={item.descripcionRestaurante}
            dueno={item.dueno}
            cantProductos={item.cantProductos}
            cantClientes={item.cantClientes}
            cantSucursales={item.cantSucursales}
            key={item.id}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default ListRestaurant;
