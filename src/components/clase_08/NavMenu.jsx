import "./navmenu.css";

function NavMenu({ onPageChange, pages }) {
  return (
    <nav className="nav_main">
      <ul className="nav_menu">
        <div className="nav_logo">HAB ReactApp</div>
        {/*  <li onClick={() => onPageChange("home")}>
          <a href="#">Home</a>
        </li> */}
        {pages.map((page) => (
          <li
            key={page.name}
            className="nav_item"
            onClick={() => onPageChange(page.name)}
          >
            <a href="#">{page.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
