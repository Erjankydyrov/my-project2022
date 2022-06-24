import Header from "../components/Header/Header";
import image from "../assets/headerImages/home.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkout } from "../redux/cartSlice";
import Main from "../components/Main/Main";
import CartDisplay from "../components/CartDisplay/CartDisplay";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(store => store.cart.items);


  function onCheckout(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const order = { items: items, ...Object.fromEntries(formData.entries()) };
    dispatch(checkout(order));;
    navigate('/');
  }


  return (
    <>
      <Header
        title="Checkout"
        image={image}>
        Please enter your information.
      </Header>
      <Main>
        <CartDisplay />
        <form onSubmit={onCheckout}>
          <label>
            First name:
            <input type="text" name="firstName" required />
          </label>
          <label>
            Last name:
            <input type="text" name="lastName" required />
          </label>
          <label>
            Address:
            <input type="text" name="address" required />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" required />
          </label>

          <button>Complete the order</button>
        </form>
      </Main>
    </>
  );
}

export default Checkout;