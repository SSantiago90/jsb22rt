import "./flex.css";
import PropTypes from "prop-types";

function Flex({ children, inColumns = false }) {
  const classFlex = inColumns ? "flex-container-columns" : "flex-container-row";

  return <div className={classFlex}>{children}</div>;
}

export default Flex;

Flex.propTypes = {
  children: PropTypes.isRequired,
};
