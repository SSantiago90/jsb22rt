import "./navmenu.css";
import { useRoutesContext } from "../../context/routesContext";

function NavMenu({ pages }) {
  const { handlePageChange } = useRoutesContext();

  return (
    <nav className="nav_main">
      <ul className="nav_menu">
        <div className="nav_logo">HAB ReactApp</div>
        {pages.map((page) => (
          <li
            key={page.name}
            className="nav_item"
            onClick={() => handlePageChange(page.name)}
          >
            <a href="#">{page.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
