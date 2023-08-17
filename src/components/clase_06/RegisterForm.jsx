import "./loginform.css";
import { useState } from "react";
import formInputsData from "./form.json";

import FormInput from "./FormInput";

function APIauthUser(userdata) {
  if (
    userdata.email !== "" &&
    userdata.password !== "" &&
    userdata.birthday !== "" &&
    userdata["password-confirm"] !== ""
  ) {
    /* Validacion de datos de usuario */
    /* res.status.200... */
    console.log("Usuario autenticado");
    return { status: "ok" };
  } else {
    return {
      code: 403,
      status: "error",
      message: "Datos no válidos desde API",
    };
  }
}

function RegisterForm() {
  console.log(formInputsData);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    birthday: "",
  });
  const [errorsForm, setErrorsForm] = useState(null);
  const [submitedForm, setSubmitedForm] = useState(false);

  // Form CONTROLADO
  function handleAuthUser(evt) {
    evt.preventDefault();
    const response = APIauthUser(formData);
    if (response.status !== "ok") {
      setErrorsForm(response.message);
    } else {
      alert("Login existoso!!!");
      setErrorsForm(null);
      setSubmitedForm(true);
    }
  }

  function handleInputChange(evt) {
    const value = evt.target.value;
    const inputName = evt.target.name;

    const newFormData = { ...formData };
    newFormData[inputName] = value;
    setFormData(newFormData);
  }

  if (submitedForm) {
    return <h2>Gracias por registrarte</h2>;
  }

  return (
    <form onSubmit={handleAuthUser}>
      {formInputsData.map((elem) => (
        <FormInput onChange={handleInputChange} key={elem.name} {...elem} />
      ))}
      {errorsForm ? <span className="input_errors">{errorsForm}</span> : <></>}
      <button type="submit">Registrarse</button>
      <button type="reset">Cancelar</button>
    </form>
  );
}

export default RegisterForm;
