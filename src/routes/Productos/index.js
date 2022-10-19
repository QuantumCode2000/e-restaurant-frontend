import React from "react";
import Boton from "./Boton";
import BotonEliminar from "./BotonEliminar";
import BotonModificar from "./BotonModificar";
import BotonCalendario from "./BotonCalendario";
import IconoUsuario from "./IconoUsuario";
import NavBar from "./NavBar";
import TablasFinal from "./TablasFinal";
import productos from "./datos";
import { Link } from "react-router-dom";


const ff = productos


const Productos = () => {
  return <div>
    
    <NavBar/>
    <TablasFinal datosback={ff}/>
    <Link className="btn btn-success" to="nuevo">
          Nuevo
        </Link>

  </div>;
};

export default Productos;
