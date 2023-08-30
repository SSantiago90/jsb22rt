import { useRef, useState, useContext } from "react";
import "./loginform.css";
import sessionContext from "../../context/sessionContext";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [feedbackMsg, setFeedbackMsg] = useState("Ya iniciaste sesión");

  const navigateTo = useNavigate();

  // consumimos el Context
  const { logged, handleLogin } = useContext(sessionContext);

  const userInputRef = useRef();
  const passwordInputRef = useRef();

  async function handleAuthUser(evt) {
    evt.preventDefault();
    const password = passwordInputRef.current;
    const email = userInputRef.current;

    const userData = {
      password: password.value,
      email: email.value,
    };

    const response = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const jsonData = await response.json();

    if (response.ok) {
      handleLogin({
        auth: jsonData.auth,
        email: jsonData.email,
        token: jsonData.jwt,
      });
      navigateTo("/store");
    } else setFeedbackMsg("Error al autenticarte");
  }

  if (logged) return <h2>{feedbackMsg}</h2>;

  return (
    <form onSubmit={handleAuthUser}>
      <label htmlFor="email">
        Email
        <input
          ref={userInputRef}
          type="email"
          name="email"
          placeholder="Nombre de usuario"
        ></input>
      </label>

      <label>
        Contraseña
        <input
          ref={passwordInputRef}
          type="password"
          name="password"
          placeholder="****"
        ></input>
      </label>

      <button type="submit">Login</button>
      <button type="reset">Cancelar</button>
      {feedbackMsg ? <small>{feedbackMsg}</small> : <></>}
    </form>
  );
}

export default LoginForm;
