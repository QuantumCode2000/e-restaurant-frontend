import React from "react";
import "../../styles/Login/Login.css";
import firebaseApp from "../../config/credentials";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "../../styles/Register/Register.css";
const auth = getAuth(firebaseApp);
const RegisterUser = () => {
	const firestore = getFirestore(firebaseApp);

	const registerUser = async (email, password, rol, name) => {
		const infUser = await createUserWithEmailAndPassword(
			auth,
			email,
			password,
		).then((usuarioFirebase) => {
			return usuarioFirebase;
		});
		// console.log("infUser", infUser.user.uid);
		const docRef = doc(firestore, `users/${infUser.user.uid}`);
		setDoc(docRef, {
			email: email,
			rol: rol,
			password: password,
			name: name,
		});
	};
	const submitHandler = (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		const rol = "comensal";
		const name = event.target.name.value;
		registerUser(email, password, rol, name);
	};

	return (
		<main className="main-container">
			<form className="form-container-tag-register" onSubmit={submitHandler}>
				<div className="login__field">
					<input
						type="email"
						className="login__input"
						placeholder="Correo Electronico"
						id="email"
					/>
				</div>

				<div className="login__field">
					<input
						id="name"
						type="name"
						className="login__input"
						placeholder="Nombre"
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
					value="Registrar"
				/>
			</form>
			<Link to="/login">Iniciar Sesion</Link>
		</main>
	);
};

export default RegisterUser;
