import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

function Nav() {
  return (
    <ul className={classes.Nav}>
      <NavItem url="/">Home</NavItem>
      <NavItem url="/products">Products</NavItem>
      <NavItem url="/contacts">Contacts</NavItem>
    </ul>
  );
}

export default Nav;
