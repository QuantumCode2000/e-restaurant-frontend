import React from "react";
import { CardComensales } from "../../components";
import { user } from "../../utils";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import "../../styles/ListRestaurant/ListRestaurant.css";
const ListComensal = () => {
  let { list } = useContext(UserContext);
  return (
    <React.Fragment>
      <div>
        {list.map((item) => (
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
