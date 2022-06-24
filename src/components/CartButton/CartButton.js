import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { add } from "../../redux/cartSlice";

export default function CartButton({ productId, children }) {
  const dispatch = useDispatch();

  function onAddToCart() {
    dispatch(add(productId));
  }
  return <button className={classes.CartButton} onClick={onAddToCart}>{children}</button>;
}
