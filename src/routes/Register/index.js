import React from "react";
import "../../styles/Login/Login.css";
import "../../styles/Register/Register.css";
import firebaseApp from "../../config/credentials";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
const auth = getAuth(firebaseApp);

const Register = () => {
	const firestore = getFirestore(firebaseApp);
	const registerUser = async (email, password, rol, name, nameRes) => {
		let dateReg = new Date();
		dateReg = dateReg.getDate();
		console.log(dateReg);
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
		const docRefRestaurant = doc(firestore, `restaurants/${infUser.user.uid}`);
		setDoc(docRefRestaurant, {
			name: nameRes,
			owner: infUser.user.uid,
			dateReg: dateReg,
		});
	};
	const submitHandler = (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		const rol = "administrador restaurante";
		const name = event.target.name.value;
		const nameRes = event.target.nameRestaurant.value;

		registerUser(email, password, rol, name, nameRes);
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
						id="nameRestaurant"
						type="name"
						className="login__input"
						placeholder="Nombre de Restaurante"
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

export default Register;
