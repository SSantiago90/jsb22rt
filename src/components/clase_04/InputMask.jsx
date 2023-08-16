import { useRef } from "react";

function InputMask(props) {
  const refInput = useRef(null);

  function handleKeyDown(evt) {
    const { key } = evt;

    // "a"
    if (props.mask.includes(key)) {
      evt.preventDefault();
    }
  }

  function handleSubmitForm(evt) {
    //const userInput = evt.target.username.value;
    evt.preventDefault();
    console.log("gracias por enviar tu información");
  }

  function handleReset() {
    refInput.current.focus();
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="username">{props.label}</label>
      <input
        ref={refInput}
        onKeyDown={handleKeyDown}
        name={props.name}
        placeholder={props.placeholder}
      />
      <button type="submit">Enviar</button>
      <button onClick={handleReset} type="reset">
        Cancelar
      </button>
    </form>
  );
}

export default InputMask;
