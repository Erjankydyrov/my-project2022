import Header from "../components/Header/Header";
import image from "../assets/headerImages/home.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../data/products";
import { Link } from "react-router-dom";
import Main from "../components/Main/Main"
import { decrement, increment, remove } from "../redux/cartSlice";

function Cart() {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const products = getProducts();

  let total = 0;
  let output = products
    .filter((product) => items[product.productId])
    .map((product) => {
        total += product.price * items[product.productId];

        return (
          <div>
            <Link to="">{product.title}</Link> {items[product.productId]} ${product.price * items[product.productId]}
  
            <button onClick={() => dispatch(decrement(product.productId))}>-</button>
          <button onClick={() => dispatch(increment(product.productId))}>+</button>
          <button onClick={() => dispatch(remove(product.productId))}>Delete</button>
          </div>
        );
      });
  
    if (!output) {
      output = "No items in the cart.";
    }

  return (
    <>
      <Header title="Your Shopping Cart" image={image}>
        Please review items in your cart.
      </Header>
      <Main>
      <div>
        {output}
        <hr />
        Total: ${total}
      </div>
      <Link to="/checkout">Checkout</Link>
      </Main>
    </>
  );
}

export default Cart;
