import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Listo = ({direccion}) => {
    return <a  href={direccion}><button><IoMdCheckmarkCircleOutline style={{height: '20px', width: '20px', color: 'green'}}/></button></a>
};

export default Listo