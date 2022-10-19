import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { MainLayout } from "./layouts";
import {
  Home,
  About,
  Register,
  Functionalities,
  Login,
  Prices,
  Dashboard,
  PrivateRoute,
  Productos,
} from "./routes";

import Nuevo from "./routes/Productos/Nuevo";
import Editar from "./routes/Productos/modificar";

function App() {
  return (
    <UserProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element=<Home /> />
            <Route path="/about" element=<About /> />
            <Route path="/register" element=<Register /> />
            <Route path="/functionalities" element=<Functionalities /> />
            <Route path="/login" element=<Login /> />
            <Route path="/prices" element=<Prices /> />
            <Route path="/productos" element=<Productos /> />
            <Route path="/productos/nuevo" element= <Nuevo /> />
            <Route path="/productos/editar/:id" element= <Editar /> />
            {/*<PrivateRoute exact path="/dashboard" element=<Dashboard /> />*/}
          </Routes>
        </MainLayout>
      </Router>
    </UserProvider>
  );
}

export default App;
