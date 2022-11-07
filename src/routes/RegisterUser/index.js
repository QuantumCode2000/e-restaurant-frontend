import React from "react";
import "../../styles/Login/Login.css";
import { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Register/Register.css";

const RegisterUser = () => {
  const navigate = useNavigate();
  const [userState, setUserState] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { list, handleActive, handleListUser } = useContext(UserContext);
  const [nuevoUsuario, setNuevoUsuario] = useState({});

  const handleNewName = ({ value }) => {
    setNuevoUsuario({ ...nuevoUsuario, name: value });
  };
  const handleNewPass = ({ value }) => {
    setNuevoUsuario({ ...nuevoUsuario, password: value, nivel: 0 });
  };
  const handleNewEmail = ({ value }) => {
    setNuevoUsuario({ ...nuevoUsuario, email: value });
  };
  const handleAddNewUser = (event) => {
    event.preventDefault();
    handleListUser(nuevoUsuario);
    navigate("/superadmin");
  };

  return (
    <main className="main-container">
      <form
        className="form-container-tag-register"
        onSubmit={(event) => handleAddNewUser(event)}
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
          <input
            type="name"
            className="login__input"
            placeholder="Nombre"
            onChange={({ target }) => handleNewName(target)}
          />
        </div>

        <div className="login__field">
          <input
            type="password"
            className="login__input"
            placeholder="Contraseña"
            onChange={({ target }) => handleNewPass(target)}
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
      <Link to="/login">Iniciar Sesion</Link>
    </main>
  );
};

export default RegisterUser;
