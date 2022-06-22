import Header from "../components/Header/Header";
import image from "../assets/home.jpeg";
import { useSelector } from "react-redux";
import { getProducts } from "../data/products";
import { Link } from "react-router-dom";

function Cart() {
  const items = useSelector((store) => store.cart.items);
  const products = getProducts();

  const output = products
    .filter((product) => items[product.productId])
    .map((product) => {
      return (
        <div>
          <Link to="">{product.title}</Link> {items[product.productId]} $
          {product.price * items[product.productId]}
        </div>
      );
    });

  return (
    <>
      <Header title="Your Shopping Cart" image={image}>
        Please review items in your cart.
      </Header>
      <div>{output}</div>
    </>
  );
}

export default Cart;
