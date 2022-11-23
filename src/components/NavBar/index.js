import React from "react";
import "../../styles/NavBar/NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import loginIcon from "../../assets/icons/login.png";
import signoutIcon from "../../assets/icons/angle-right.png";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import firebaseApp from "../../config/credentials";
import { getAuth, signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
const auth = getAuth(firebaseApp);

const NavBar = () => {
	let { active, user } = useContext(UserContext);
	const rol = user?.rol;
	// const navigate = useNavigate();

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
				) : rol === "administrador restaurante" ? (
					<React.Fragment>
						<Link className="header-nav-link-tag" to="superadmin">
							Dashboard
						</Link>
					</React.Fragment>
				) : null}
			</nav>
			{
				<nav className="header-nav-tag ultimate-space">
					<Link className="header-nav-link-tag" to="/">
						<figure className="figure-tag">
							<img
								onClick={
									active
										? () => {
												signOut(auth);
										  }
										: null
								}
								className="image-tag"
								src={active ? signoutIcon : loginIcon}
								alt="Login"
							/>
						</figure>
					</Link>
				</nav>
			}
		</header>
	);
};

export default NavBar;
