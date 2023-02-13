import { NavLink, Outlet } from "react-router-dom";
import "./NavigationPage.scss";

const NavigationPage = () => {
  return (
    <main className="main">
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink className="navigation__icon" to="/">
              <i className="bi bi-house"></i>
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink className="navigation__icon" to="/about">
              <i className="bi bi-person"></i>
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink className="navigation__icon" to="/resume">
              <i className="bi bi-file-earmark-code"></i>
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink className="navigation__icon" to="/portfolio">
              <i className="bi bi-eye"></i>
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink className="navigation__icon" to="/contact">
              <i className="bi bi-telephone"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </main>
  );
};

export default NavigationPage;
