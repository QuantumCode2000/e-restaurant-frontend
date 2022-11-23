import "./App.css";
import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainLayout, SuperLayout } from "./layouts";
import {
	Home,
	About,
	Register,
	Functionalities,
	Login,
	Prices,
	Dashboard,
	ProtectedRoute,
	ListRestaurant,
	ListComensal,
	SuperHome,
	ListMensajes,
	RegisterUser,
} from "./routes";
import Felicitaciones from "./pages/Felicitaciones";
import ReservasComensal from "./components/ReservasComensal/ReservasComensal";
import UserContext from "./context/UserContext";

function App() {
	const { active } = useContext(UserContext);

	return (
		<Router>
			<MainLayout>
				<Routes>
					<Route path="/" element={<SuperHome />} />
					<Route path="/home" element=<Home /> />
					<Route path="/about" element=<About /> />
					<Route path="/register" element=<Register /> />
					<Route path="/registeruser" element=<RegisterUser /> />
					<Route path="/functionalities" element=<Functionalities /> />
					<Route path="/login" element=<Login /> />
					<Route path="/prices" element=<Prices /> />
					<Route path="/felicidades" element=<Felicitaciones /> />
					<Route path="/reservas" element=<ReservasComensal /> />
					{/* <Route path="/dashboard" element=<Dashboard /> /> */}
					<Route
						path="/dashboard"
						element={
							<ProtectedRoute user={active}>
								<Dashboard />
							</ProtectedRoute>
						}
					/>
					<Route path="superadmin" element=<SuperLayout />>
						<Route path="restaurantes" element=<ListRestaurant /> />
						<Route path="comensales" element=<ListComensal /> />
						<Route path="mensajes" element=<ListMensajes /> />
					</Route>
				</Routes>
			</MainLayout>
		</Router>
	);
}

export default App;
