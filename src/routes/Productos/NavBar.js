import React from "react";
import Ulista from "./Ulista";
import "./nav.css"

const NavBar = () => {
    return <ul style={{backgroundColor: "black", opacity: "40%"}}>
        <Ulista texto="Inicio" direccion="inicio.js"/>
        <Ulista texto="Restaurantes" direccion="restaurantes.js"/>
        <Ulista texto="Conócenos" direccion="conocenos.js"/>
        <Ulista texto="Lista de Productos" direccion="listaProductos"/>
        <Ulista texto="USUARIO" direccion="usuario"/>
    </ul>
};

export default NavBar