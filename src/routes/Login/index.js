import React from "react";
import "../../styles/Login/Login.css";
import { useState, useContext } from "react";
import UserContext from "../../context/UserContext";

const Login = () => {
  const [userState, setUserState] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { list, handleActive, handleListUser } = useContext(UserContext);

  const handleEmail = ({ value }) => {
    setEmail(value);
    console.log("email", email);
  };
  const handlePassword = ({ value }) => {
    setPassword(value);
    console.log("password", password);
  };

  const handleUser = async (event) => {
    event.preventDefault();
    let inListUser = list.some(
      (item) => item.email === email && item.password === password,
    );
    console.log("esta en inListUser", inListUser);

    if (inListUser) {
      var objectListUser = list.find(
        (item) => item.email === email && item.password === password,
      );
      handleActive(inListUser, objectListUser.nivel);
    }
  };

  return (
    <main className="main-container">
      <form
        className="form-container-tag"
        // action="action_page.php"
        // method="post"
        onSubmit={(event) => handleUser(event)}
      >
        <div className="login__field">
          <input
            type="email"
            className="login__input"
            placeholder="Nombre de Usuario/ Email"
            onChange={({ target }) => handleEmail(target)}
          />
        </div>

        <div className="login__field">
          <input
            type="password"
            className="login__input"
            placeholder="Contraseña"
            onChange={({ target }) => handlePassword(target)}
          />
        </div>

        <button className="button login__submit">
          <span className="button__text">Ingresar</span>
        </button>
      </form>
    </main>
  );
};

export default Login;
