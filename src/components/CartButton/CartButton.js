import classes from "CartButton.module.css";

export default function CartButton({ productId, children }) {
  return <button className={classes.CartButton}>{children}</button>;
}
