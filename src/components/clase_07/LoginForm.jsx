import { useRef, useState } from "react";
import "./loginform.css";

function LoginForm() {
  const [login, setLogin] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const userInputRef = useRef();
  const passwordInputRef = useRef();

  async function handleAuthUser(evt) {
    evt.preventDefault();
    console.log("Refs:", passwordInputRef, userInputRef);
    const password = passwordInputRef.current;
    const email = userInputRef.current;

    const userData = {
      password: password.value,
      email: email.value,
    };

    // ramiro@mail.com aaaAAA11

    const response = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const jsonData = await response.json();

    window.localStorage.setItem("jwt", jsonData.jwt);

    setLogin(true);

    if (response.ok) setFeedbackMsg("Iniciaste sesión");
    else setFeedbackMsg("Error al autenticarte");
  }

  if (login) return <h2>{feedbackMsg}</h2>;

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
    </form>
  );
}

export default LoginForm;
