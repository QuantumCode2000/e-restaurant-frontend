import React from "react";
import "./ReservasComensal.styles.css";
import { restaurantes } from "../../utils";

const ReservasComensal = () => {
	return (
		<React.Fragment>
			<div className="Header">
				<h3 className="Heading">Platos elegidos</h3>
				<h5 className="Action">Quitar todos los platos</h5>
				<select className="buttonCard" name="+ Agregar Restaurante">
					{restaurantes.restaurantes.map((item) => (
						<option>{item.nombreRestaurante}</option>
					))}
				</select>
				<button className="buttonCard">+ Agregar Platillos</button>
			</div>
		</React.Fragment>
	);
};

export default ReservasComensal;
