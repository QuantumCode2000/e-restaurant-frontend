import React from "react";

const CardComensales = ({ name, email, rol }) => {
	return (
		<div className="card">
			<div className="card-text">
				<span className="date">{name}</span>

				<h2>{rol}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default CardComensales;
