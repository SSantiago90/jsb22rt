import "./navrouter.css";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/nested">Nested</NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/nested/page1">Page 1</NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/nested/page2">Page 2</NavLink>
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
      </ul>
    </nav>
  );
}

export default NavRouter;
