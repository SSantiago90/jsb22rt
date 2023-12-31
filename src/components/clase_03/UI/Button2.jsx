import PropTypes from "prop-types";
import { useState } from "react";

function ButtonChilds({ onTouch, color = "#050505", children = "Click aquí" }) {
  const [colorState, setColorState] = useState(color);

  let styleBtn = {
    backgroundColor: colorState,
  };

  function handleClick() {
    setColorState("brown");
    onTouch();
  }

  /*   const btn = document.getElementById(`btn-click-${children}`);
  console.log("Obtenemos el boton->", btn); 
  btn.addEventListener( "click" , ()=> { ... });
  btn.removeEventListener()*/

  return (
    <button id={`btn-click-${children}`} onClick={handleClick} style={styleBtn}>
      {children}
    </button>
  );
}

ButtonChilds.propTypes = {
  onTouch: PropTypes.func,
  color: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default ButtonChilds;
