import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";

const BotonCalendario = ({direccion}) => {
    return <a  href={direccion}><button><AiOutlineCalendar style={{height: '20px', width: '20px', color: 'blue'}}/></button></a>
};

export default BotonCalendario