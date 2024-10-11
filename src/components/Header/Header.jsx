import { NavLink } from "react-router-dom";

import css from "./Header.module.css";

export const Header = () => {
  return (
    <header className={css.header_styles}>
      <p>LOGO </p>
      <nav className={css.nav_styles}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? css.active : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => (isActive ? css.active : "")}
        >
          Catalog
        </NavLink>
      </nav>
      <div className={css.hidden_element}>
        <p>LOGO</p>
      </div>
    </header>
  );
};
export default Header;
