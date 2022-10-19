import React from "react";
import { CardComensales } from "../../components";
import { user } from "../../utils";
import "../../styles/ListRestaurant/ListRestaurant.css";
const ListComensal = () => {
  return (
    <React.Fragment>
      <div>
        {user.users.map((item) => (
          <CardComensales
            name={item.name}
            email={item.email}
            nivel={item.nivel}
            key={item.id}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default ListComensal;
