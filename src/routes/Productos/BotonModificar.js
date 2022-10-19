import React from "react";
import { AiOutlineEdit } from "react-icons/ai";

const BotonModificar = ({direccion}) => {
    return <a  href={direccion}><button><AiOutlineEdit style={{height: '20px', width: '20px', color: 'black'}}/></button></a>
};

export default BotonModificar