import Header from "../components/Header/Header";
import image from "../assets/headerImages/cart.jpg";
import { Link } from "react-router-dom";
import Main from "../components/Main/Main"
import CartDisplay from "../components/CartDisplay/CartDisplay";
import { BsArrowBarRight } from 'react-icons/bs';

function Cart() {

  return (
    <>
      <Header title="Your Shopping Cart" image={image} boxTitle="General gather your army." boxChildren="This is where your army gathers.">
        Please review items in your cart.
      </Header>
      <Main>
        <CartDisplay actions />
        <div className="checkoutContainer">
          <Link to="/checkout" className="checkoutLink">CHECKOUT <BsArrowBarRight className="arrowIcon" /></Link>
        </div>
      </Main>
    </>
  );
}

export default Cart;
