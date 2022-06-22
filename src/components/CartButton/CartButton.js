import classes from "CartButton.module.css";
import { useDispatch } from "react-redux";

export default function CartButton({ productId, children }) {
  const dispatch = useDispatch();

  function onAddToCart() {
    dispatch({ type: "cart/add", payload: productId });
  }
  return <button className={classes.CartButton} onClick={onAddToCart}>{children}</button>;
}
