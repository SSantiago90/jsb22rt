import { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../../context/cartContext";

function CartIcon() {
  const { countItems } = useContext(cartContext);

  return (
    <li className="nav_item nav_cart">
      <Link to="/cart">
        <i>🛒</i>
      </Link>
      <span className="nav_cart_count">{countItems()}</span>
    </li>
  );
}

export default CartIcon;
