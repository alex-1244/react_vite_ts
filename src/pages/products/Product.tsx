import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();

  return (
    <>
      <div>This is a product details page for product: {id}</div>
    </>
  );
}

export default Product;
