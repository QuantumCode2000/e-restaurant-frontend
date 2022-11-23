import React from "react";
import { Link } from "react-router-dom";
import "../../styles/SideBar/SideBar.css";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

const SideBar = () => {
	const { user } = useContext(UserContext);

	return user?.rol === "administrador restaurante" ? (
		<div className="sidebar-content">
			<Link to="/superadmin/restaurantes" className="sidebar-option">
				Restaurantes
			</Link>
			<Link to="/superadmin/comensales" className="sidebar-option">
				Comensales
			</Link>
			<Link to="/superadmin/mensajes" className="sidebar-option">
				Mensajes
			</Link>
		</div>
	) : null;
};

export default SideBar;
