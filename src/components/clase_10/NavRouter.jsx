import CartIcon from "./CartIcon";
import "./navrouter.css";
import { NavLink, Link } from "react-router-dom";

function NavRouter() {
  return (
    <nav className="nav_main">
      <ul className="nav_menu">
        <div className="nav_logo">HAB ReactApp</div>
        <li className="nav_item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/store">Tienda</NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/login">Login</NavLink>
        </li>

        <li className="nav_item">
          <a
            target="_blank"
            href="http://miredsocial.com/hackaboss"
            rel="noreferrer"
          >
            Redes
          </a>
        </li>
        <CartIcon />
      </ul>
    </nav>
  );
}

export default NavRouter;
