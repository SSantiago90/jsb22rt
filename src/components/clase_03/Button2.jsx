import PropTypes from "prop-types";
import { useState } from "react";

function ButtonChilds({ onTouch, color = "#050505", children = "Click aquí" }) {
  const [colorState, setColorState] = useState(color);

  console.log("Fuí renderizado");

  let styleBtn = {
    backgroundColor: colorState,
  };

  function handleClick() {
    setColorState("brown");
    onTouch();
  }

  return (
    <button onClick={handleClick} style={styleBtn}>
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
