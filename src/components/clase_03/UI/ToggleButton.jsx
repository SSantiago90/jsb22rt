import { useState } from "react";
import "./togglebutton.css";
import PropTypes from "prop-types";

function ToggleButton({ className, children }) {
  const [isOn, setIsOn] = useState(true);
  const classNameBtn = isOn ? "toggle-button active" : "toggle-button";

  return (
    <button
      className={`${classNameBtn} ${className}`}
      onClick={() => {
        setIsOn(!isOn);
      }}
    >
      {children}
    </button>
  );
}

ToggleButton.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

export default ToggleButton;
