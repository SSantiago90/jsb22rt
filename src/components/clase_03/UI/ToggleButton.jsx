import { useState } from "react";
import "./togglebutton.css";
import PropTypes from "prop-types";

function ToggleButton({ className, children, onToggle }) {
  const [isOn, setIsOn] = useState(true);
  const classNameBtn = isOn ? "toggle-button active" : "toggle-button";

  function handleClick() {
    setIsOn(!isOn);
    onToggle(isOn);
  }

  return (
    <button className={`${classNameBtn} ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
}

ToggleButton.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

export default ToggleButton;
