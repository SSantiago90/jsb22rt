import PropTypes from "prop-types";

function Button({ onTouch, color, label }) {
  /* console.log(props); */

  const styleBtn = {
    backgroundColor: color || "black",
  };

  return (
    <button onClick={onTouch} style={styleBtn}>
      {label || "Click aquí"}
    </button>
  );
  // falsy/truthy
}

Button.propTypes = {
  onTouch: PropTypes.func,
  color: PropTypes.string,
  label: PropTypes.string,
};

export default Button;
