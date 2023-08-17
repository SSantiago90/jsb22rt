import "./loginform.css";
import { useState } from "react";

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

function RegisterForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    birthday: "",
  });

  // Form CONTROLADO
  function handleAuthUser() {
    APIauthUser(formData);
  }

  function handleInputChange(evt) {
    const value = evt.target.value;
    const inputName = evt.target.name;

    const newFormData = { ...formData };
    newFormData[inputName] = value;
    setFormData(newFormData);
  }

  let errors = [];

  if (formData.email.includes("@") === false) {
    errors.push({
      type: "email",
      text: "Debes ingresar un email válido",
    });
  }

  if (formData.password.length < 6) {
    errors = [
      ...errors,
      {
        type: "password",
        text: "Tu contraseña necesita más de 6 caracteres.",
      },
    ];
  }

  console.log(errors);

  return (
    <form onSubmit={handleAuthUser}>
      <label htmlFor="email">Email</label>
      <input
        onChange={handleInputChange}
        type="email"
        name="email"
        placeholder="Email"
      ></input>
      <br />
      <label>
        Contraseña
        <input
          onChange={handleInputChange}
          type="password"
          name="password"
          placeholder="****"
        ></input>
      </label>
      <br />
      <label>
        Fecha de nacimiento
        <input
          className=""
          onChange={handleInputChange}
          type="date"
          name="birthday"
        ></input>
      </label>
      <br />
      <div className="form_errors">
        {errors.map((err) => (
          <small style={{ display: "block", color: "red" }} key={err.type}>
            {err.text}
          </small>
        ))}
      </div>
      <button type="submit">Registrarse</button>
      <button type="reset">Cancelar</button>
    </form>
  );
}

export default RegisterForm;
