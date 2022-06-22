import { NavLink, useMatch } from "react-router-dom";
import "./NavItem.css";

function NavItem(props) {
  return (
    <li className="NavItem">
      <NavLink
        to={props.url}
        className={useMatch(props.url) ? classes.active : null}
      >
        {props.children}
      </NavLink>
    </li>
  );
}

export default NavItem;
