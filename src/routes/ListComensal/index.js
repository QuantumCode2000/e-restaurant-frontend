import React from "react";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
import { CardComensales } from "../../components";
// import UserContext from "../../context/UserContext";
// import { useContext } from "react";
import firebaseApp from "../../config/credentials";
import "../../styles/ListRestaurant/ListRestaurant.css";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
// import { Tooltip } from "bootstrap"

const ListComensal = () => {
	const fileType =
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
	const fileExtension = ".xlsx";
	const [usersList, setUsersList] = React.useState([]);
	const exportExcel = async () => {
		const ws = XLSX.utils.json_to_sheet(usersList);
		const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
		const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
		const data = new Blob([excelBuffer], { type: fileType });
		FileSaver.saveAs(data, "usersList" + fileExtension);
	};
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
			<div className="wrapper">
				<button className="button-excel" onClick={exportExcel}>
					Exportar a Excel
				</button>
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
				{/* <Tooltip title="Exportar a Excel"> */}

				{/* </Tooltip> */}
			</div>
		</React.Fragment>
	);
};

export default ListComensal;
