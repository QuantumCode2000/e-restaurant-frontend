import React from "react";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
// import UserContext from "../../context/UserContext";
// import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import firebaseApp from "../../config/credentials";
import "../../styles/ListRestaurant/ListRestaurant.css";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
// import { Tooltip } from "bootstrap"

const ListReservas = () => {
	const { user } = useContext(UserContext);
	const fileType =
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
	const fileExtension = ".xlsx";
	const [resList, setRestList] = React.useState([]);
	const exportExcel = async () => {
		const ws = XLSX.utils.json_to_sheet(resList);
		const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
		const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
		const data = new Blob([excelBuffer], { type: fileType });
		FileSaver.saveAs(data, "usersList" + fileExtension);
	};
	const getAllRes = async () => {
		const db = getFirestore(firebaseApp);
		const usersCollection = collection(db, "reservas");
		const usersSnapshot = await getDocs(usersCollection);
		const resList = usersSnapshot.docs.map((doc) => doc.data());
		console.log(resList);
		setRestList(resList);
	};
	useEffect(() => {
		getAllRes();
	}, []);
	return (
		<React.Fragment>
			<div className="wrapper">
				<button className="button-excel" onClick={exportExcel}>
					Exportar a Excel
				</button>
				{resList.map((item, index) => (
					<div key={index}>
						<p>Nombre del restaurante: {item.nombreRestaurante}</p>
						<p>Nombre del comensal: {item.nombreComensal}</p>
						<p>Fecha: {item.fecha}</p>
						<p>Precio total {item.precioTotal}</p>
						<p>Cantidad de Personas {item.cantidadPersonas}</p>
					</div>
				))}
			</div>
		</React.Fragment>
	);
};

export default ListReservas;
