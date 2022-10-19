import React from "react";
import { BsExclamationTriangleFill } from "react-icons/bs";

const IconoCuidao = ({direccion, id}) => {
    return <a  href={`${direccion}/${id}`} ><button><BsExclamationTriangleFill style={{height: '20px', width: '20px', color: 'blue'}}/></button></a>
};

export default IconoCuidao