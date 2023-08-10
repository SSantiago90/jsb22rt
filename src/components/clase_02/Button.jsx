import PropTypes from "prop-types";

function Button({ onTouch, color = "#050505", label = "Click aquí" }) {
  const styleBtn = {
    backgroundColor: color,
  };

  return (
    <button onClick={onTouch} style={styleBtn}>
      {label}
    </button>
  );
}

Button.propTypes = {
  onTouch: PropTypes.func,
  color: PropTypes.string,
  label: PropTypes.string,
};

export default Button;
