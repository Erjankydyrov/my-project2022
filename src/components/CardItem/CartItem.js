import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decrement, increment, remove } from "../../redux/cartSlice";
import classes from "./CartItem.module.css";

export default function CartItem({ product, actions, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className={classes.CartItem}>
      <img src={product.image} alt={product.title} className={classes.image} />
      <div className={classes.section}>
        <div className={classes.title}>
          <Link to={'/products/' + product.productId}>{product.title}</Link>
        </div>
        <div className={classes.quantity}>
          {actions ? <button onClick={() => dispatch(decrement(product.productId))} className={classes.btn}>-</button> : null}
          <span className={classes.quantityItem}>{quantity}</span>
          {actions ? <button onClick={() => dispatch(increment(product.productId))} className={classes.btn}>+</button> : null}
        </div>
        <div className={classes.subtotal}>
          <span className={classes.price}>${product.price * quantity}</span>
          {actions ? <button onClick={() => dispatch(remove(product.productId))} className={classes.btnRemove}>Delete</button> : null}
        </div>
      </div>
    </div>
  )
} 