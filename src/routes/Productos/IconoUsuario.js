import React from "react";
import { FaUser } from "react-icons/fa";

const IconoUsuario = ({direccion}) => {
    return <a  href={direccion}><button><FaUser style={{height: '300px', width: '300px', color: 'blue'}}/></button></a>
};

export default IconoUsuario