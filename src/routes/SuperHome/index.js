import React from "react";
import { Link } from "react-router-dom";

const SuperHome = () => {
	return (
		<React.Fragment>
			<div className="container">
				<div className="card">
					<div className="box">
						<div className="content">
							<h3>Eres Admin</h3>
							<p>inicia sesion para ver los datos de tu restaurante.</p>
							<Link to="login">Ingresar</Link>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default SuperHome;
