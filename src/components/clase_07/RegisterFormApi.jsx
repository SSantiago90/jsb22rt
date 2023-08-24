import "./loginform.css";
import { useState } from "react";
import formInputsData from "./form.json";

import FormInput from "./FormInput";

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
  async function handleAuthUser(evt) {
    evt.preventDefault();

    const response = await fetch("http://localhost:3001/api/users", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("RESPUESTA API");
    console.log(response);

    const jsonData = await response.json();
    console.log(jsonData);

    if (response.ok === false) {
      setErrorsForm(jsonData.error);
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
    <div className="form_container">
      <form onSubmit={handleAuthUser}>
        <div className="form_header">
          <h2>Registrarse</h2>
        </div>
        {formInputsData.map((elem) => (
          <FormInput onChange={handleInputChange} key={elem.name} {...elem} />
        ))}
        {errorsForm ? (
          <span className="input_errors">{errorsForm}</span>
        ) : (
          <></>
        )}
        <button type="submit">Registrarse</button>
        <button type="reset">Cancelar</button>
      </form>
    </div>
  );
}

export default RegisterForm;
