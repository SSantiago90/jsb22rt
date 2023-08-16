import { forwardRef, useState } from "react";
import "./togglebutton.css";

const ToggleButtonForwardRef = forwardRef(function ToggleButton(
  { className, initial, children, onToggle },
  ref
) {
  const [isOn, setIsOn] = useState(initial);
  const classNameBtn = isOn ? "toggle-button active" : "toggle-button";

  function handleClick() {
    setIsOn(!isOn);
    onToggle(!isOn);
  }

  return (
    <button
      ref={ref}
      className={`${classNameBtn} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
});

export default ToggleButtonForwardRef;
