import React from "react";

const Boton = ({texto, direccion}) => {
    return <a href={direccion}><button >{texto}</button></a>
};

export default Boton