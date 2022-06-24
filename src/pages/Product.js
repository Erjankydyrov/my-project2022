import { useParams } from "react-router-dom";
import CartButton from "../components/CartButton/CartButton";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { getProduct } from "../data/products";

function Product() {
  const params = useParams();
  const product = getProduct(params.productId);

  if (!product) {
    return null;
  }

  return (
    <>
      <Header title={product.title} image={product.image}>
        {product.description}
      </Header>
      <Main>
        <CartButton productId={params.productId}>Add to cart</CartButton>
      </Main>
    </>
  );
}

export default Product;
