import React from "react";
import { AiFillDelete } from "react-icons/ai";

const BotonEliminar = ({direccion}) => {
    return <a  href={direccion}><button><AiFillDelete style={{height: '20px', width: '20px', color: 'blue'}}/></button></a>
};

export default BotonEliminar