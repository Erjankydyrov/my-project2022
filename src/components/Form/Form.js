import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkout } from "../../redux/cartSlice";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, localId } = useSelector((store) => ({
    items: store.cart.items,
    localId: store.auth.localId,
  }));

  useEffect(() => {
    if (!localId) {
      navigate("/auth");
    }
  }, [localId, navigate]);

  function onCheckout(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(
      checkout({
        localId: localId,
        items: items,
        ...Object.fromEntries(formData.entries()),
      })
    );
    navigate("/");
  }
  return (
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
        <input type="email" name="email" required />
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
  );
}

export default Form;
