import React from "react";

const CardMensajes = ({ mensajes, email }) => {
	return (
		<div className="alert simple-alert">
			<h3>{mensajes}</h3>
			{/* <a className="close">&times;</a> */}
		</div>
	);
};

export default CardMensajes;
