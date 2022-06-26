import Header from "../components/Header/Header";
import image from "../assets/headerImages/checkout.jpg";
import Main from "../components/Main/Main";
import CartDisplay from "../components/CartDisplay/CartDisplay";
import Form from "../components/Form/Form";

function Checkout() {
  

  return (
    <>
      <Header
        title="Checkout"
        image={image}
        boxTitle="General we are ready for battle!"
        boxChildren="Tell us where to go."
      >
        Please enter your information.
      </Header>
      <Main>
        <CartDisplay />
        <Form />
      </Main>
    </>
  );
}

export default Checkout;
