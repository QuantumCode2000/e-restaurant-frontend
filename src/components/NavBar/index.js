import React from "react";
import "../../styles/NavBar/NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const NavBar = () => {
	let { active, user } = useContext(UserContext);
	const rol = user?.rol;

	return (
		<header className="header-tag">
			<nav className="header-nav-tag first-space">
				<Link className="header-nav-link-tag" to="/">
					<figure className="figure-tag">
						<img className="image-tag" src={logo} alt="Inicio" />
					</figure>
					<p className="foodie-logo">Foodie</p>
				</Link>
			</nav>
			<nav className="header-nav-tag center-space">
				{active === false ? (
					<React.Fragment>
						<Link className="header-nav-link-tag" to="functionalities">
							Funcionalidades
						</Link>
						<Link className="header-nav-link-tag" to="about">
							Nosotros
						</Link>
						<Link className="header-nav-link-tag" to="prices">
							Precios
						</Link>
					</React.Fragment>
				) : rol === "comensal" ? (
					<React.Fragment>
						<Link className="header-nav-link-tag" to="reservas">
							Reservas
						</Link>
					</React.Fragment>
				) : null}
			</nav>
			{/* 
				{active === false ? (
					<React.Fragment>
						
					</React.Fragment>
				) : user.rol === "administrador restaurante" ? (
					<React.Fragment>
						<Link className="header-nav-link-tag" to="superadmin">
							Dashboard
						</Link>
					</React.Fragment>
				) : user.rol === "comensal" ? (
					<React.Fragment>
						<Link className="header-nav-link-tag" to="reservas">
							Reservas
						</Link>
					</React.Fragment>
				) : null}
			</nav>
			<nav className="header-nav-tag ultimate-space">
				<Link className="header-nav-link-tag" to="/">
					<figure className="figure-tag">
						<img className="image-tag" src={loginIcon} alt="Login" />
					</figure>
				</Link>
			</nav> */}
		</header>
	);
};

export default NavBar;
