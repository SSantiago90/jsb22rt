import { useRef } from "react";
import "./loginform.css";

function APIauthUser(userdata) {
  if (userdata.email !== "" && userdata.password !== "") {
    /* Validacion de datos de usuario */
    /* res.status.200... */
    console.log("Usuario autenticado");
    return { status: "ok" };
  } else {
    return { code: 403, status: "error", message: "Datos no válidos" };
  }
}

function LoginForm() {
  const userInputRef = useRef();
  const passwordInputRef = useRef();

  // * Form NO controlado
  function handleAuthUser(evt) {
    evt.preventDefault();
    // Datos a través del evento
    //console.log(evt.target.password.value, evt.target.email.value);
    //const { password, email } = evt.target;

    // Datos a través de refs
    console.log("Refs:", passwordInputRef, userInputRef);
    const password = passwordInputRef.current;
    const email = userInputRef.current;

    /* DRY -> Dont repeat yourself */
    const userData = {
      password: password.value,
      email: email.value,
    };

    if (validateInputs(userData)) {
      const responseAPI = APIauthUser(userData);
      if (responseAPI.status === "ok") {
        alert("Te validaste correctamente");
      } else {
        alert(`Error al iniciar sesión ${responseAPI.message}.`);
      }
    } else {
      return { error: "campos inválidos" };
    }
  }

  function validateInputs(data) {
    if (data.username === "") return false;
    if (data.password.length < 6) return false;
    return true;
  }

  return (
    <form onSubmit={handleAuthUser}>
      <label htmlFor="email">Email</label>
      <input
        ref={userInputRef}
        type="email"
        name="email"
        placeholder="Nombre de usuario"
      ></input>
      <br />
      <label>
        Contraseña
        <input
          ref={passwordInputRef}
          type="password"
          name="password"
          placeholder="****"
        ></input>
      </label>
      <br />

      <button type="submit">Login</button>
      <button type="reset">Cancelar</button>
    </form>
  );
}

export default LoginForm;
