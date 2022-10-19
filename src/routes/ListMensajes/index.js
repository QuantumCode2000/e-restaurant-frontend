import React from "react";
import { CardMensajes } from "../../components";
import { mensajes } from "../../utils";
import "../../styles/ListRestaurant/ListRestaurant.css";
const ListMensajes = () => {
  return (
    <React.Fragment>
      <div>
        {mensajes.mensajes.map((item) => (
          <CardMensajes mensajes={item.mensaje} email={item.email} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default ListMensajes;
