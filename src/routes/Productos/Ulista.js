import React from "react";

const Ulista = ({texto, direccion}) => {
    return <li style={{display: 'inline'}}><a href={direccion} style={{color: "white"}}>{texto}</a></li>

};

export default Ulista