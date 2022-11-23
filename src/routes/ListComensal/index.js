import React from "react";
import { CardComensales } from "../../components";
// import UserContext from "../../context/UserContext";
// import { useContext } from "react";
import firebaseApp from "../../config/credentials";
import "../../styles/ListRestaurant/ListRestaurant.css";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
const ListComensal = () => {
	const [usersList, setUsersList] = React.useState([]);
	const getAllUsers = async () => {
		const db = getFirestore(firebaseApp);
		const usersCollection = collection(db, "users");
		const usersSnapshot = await getDocs(usersCollection);
		const usersList = usersSnapshot.docs.map((doc) => doc.data());
		console.log(usersList);
		setUsersList(usersList);
	};
	useEffect(() => {
		getAllUsers();
	}, []);
	return (
		<React.Fragment>
			<div>
				{usersList.map((item) =>
					item.rol === "comensal" ? (
						<CardComensales
							name={item.name}
							email={item.email}
							rol={item.rol}
							key={item.email}
						/>
					) : null,
				)}
			</div>
		</React.Fragment>
	);
};

export default ListComensal;
