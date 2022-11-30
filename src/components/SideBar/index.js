import React from "react";
import { Link } from "react-router-dom";
import "../../styles/SideBar/SideBar.css";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

const SideBar = () => {
	const { user } = useContext(UserContext);

	return user?.rol === "administrador restaurante" ? (
		<div className="sidebar-content">
			<Link to="/superadmin/reservasres" className="sidebar-option">
				Reservas
			</Link>
			<Link to="/superadmin/comensales" className="sidebar-option">
				Comensales
			</Link>
		</div>
	) : user?.rol === "admin" ? (
		<Link to="/superadmin/mensajes" className="sidebar-option">
			Mensajes
		</Link>
	) : null;
};

export default SideBar;
