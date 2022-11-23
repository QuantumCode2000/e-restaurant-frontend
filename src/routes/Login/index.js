import React from "react";
import "../../styles/Login/Login.css";
import { useNavigate, Link } from "react-router-dom";
import firebaseApp from "../../config/credentials";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseApp);

const Login = () => {
	const navigate = useNavigate();
	// const [userState, setUserState] = useState(true);
	const submitHandler = (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		navigate("/felicidades");
		signInWithEmailAndPassword(auth, email, password);
	};
	return (
		<main className="main-container">
			<form
				className="form-container-tag"
				// action="action_page.php"
				// method="post"
				onSubmit={submitHandler}
			>
				<div className="login__field">
					<input
						id="email"
						type="email"
						className="login__input"
						placeholder="Email"
					/>
				</div>

				<div className="login__field">
					<input
						id="password"
						type="password"
						className="login__input"
						placeholder="Contraseña"
					/>
				</div>

				<input
					className="button login__submit"
					type="submit"
					value=" Iniciar Sesion "
				/>
			</form>
			<Link to="/registeruser">Registrarse</Link>
		</main>
	);
};

export default Login;
