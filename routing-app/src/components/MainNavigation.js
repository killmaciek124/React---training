import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={(
                { isActive } // isActive is provided by React
              ) => (isActive ? classes.active : undefined)}
              end // to znaczy ze ma sie konczyc path '/' (products tez ma '/' ale sie nie zaswieci przez 'end')
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={(
                { isActive } // isActive is provided by React
              ) => (isActive ? classes.active : undefined)}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
