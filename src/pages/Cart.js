import Header from "../components/Header/Header";
import image from "../assets/headerImages/home.jpg";
import { Link } from "react-router-dom";
import Main from "../components/Main/Main"
import CartDisplay from "../components/CartDisplay/CartDisplay";

function Cart() {

  return (
    <>
      <Header title="Your Shopping Cart" image={image}>
        Please review items in your cart.
      </Header>
      <Main>
        <CartDisplay actions />
        <Link to="/checkout">Checkout</Link>
      </Main>
    </>
  );
}

export default Cart;
