import { useState } from "react";

function FormInput(props) {
  const [errors, setErrors] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  function validateInput(evt) {
    const value = evt.target.value;
    const isValid = value.match(props.pattern);

    if (isValid) {
      setErrors(false);
    } else {
      setErrors(true);
    }

    props.onChange(evt);
  }

  return (
    <>
      <label htmlFor={props.name}>
        {props.label}
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={validateInput}
          name={props.name}
          placeholder={props.placeholder}
          pattern={props.pattern}
          type={props.type}
          className={isFocused ? "focus" : ""}
          required
        ></input>
      </label>
      {errors ? <span className="input_errors">{props.error}</span> : <></>}
    </>
  );
}

export default FormInput;
