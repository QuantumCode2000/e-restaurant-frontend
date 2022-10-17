import React from "react";
import "../../styles/Login/Login.css";
import { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import "../../styles/Register/Register.css";

const Register = () => {
  const [userState, setUserState] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { list, handleActive, handleListUser } = useContext(UserContext);
  const [nuevoUsuario, setNuevoUsuario] = useState({});

  const handleNewName = ({ value }) => {
    setNuevoUsuario({ ...nuevoUsuario, nombre: value });
  };
  const handleNewRestaurant = ({ value }) => {
    setNuevoUsuario({ ...nuevoUsuario, apellido: value });
  };
  const handleNewUser = ({ value }) => {
    setNuevoUsuario({ ...nuevoUsuario, usuario: value });
  };
  const handleNewPass = ({ value }) => {
    setNuevoUsuario({ ...nuevoUsuario, password: value, nivel: 0 });
  };
  const handleNewEmail = ({ value }) => {
    setNuevoUsuario({ ...nuevoUsuario, email: value });
  };
  const handleNewAdd = ({ value }) => {
    setNuevoUsuario({ ...nuevoUsuario, direccion: value });
  };

  return (
    <main className="main-container">
      <form
        className="form-container-tag-register"
        action="action_page.php"
        method="post"
      >
        <div className="login__field">
          <input
            type="email"
            className="login__input"
            placeholder="Correo Electronico"
            onChange={({ target }) => handleNewEmail(target)}
          />
        </div>

        <div className="login__field">
          <input type="name" className="login__input" placeholder="Nombre" />
        
        </div>

        <div className="login__field">
          <input
            type="text"
            className="login__input"
            placeholder="Nombre del Restaurante"
          />
        </div>

        <div className="login__field">
          <input
            type="password"
            className="login__input"
            placeholder="Contraseña"
          />
        </div>

        <div className="login__field">
          <input
            type="password"
            className="login__input"
            placeholder="Repite Contraseña"
          />
        </div>

        <button className="button login__submit">
          <span className="button__text">Registrar</span>
        </button>
      </form>
    </main>
  );
};

export default Register;
