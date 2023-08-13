import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <div>This is a product list page</div>
      <Link to="/products/1">Product 1</Link>
      <Link to="/products/2">Product 2</Link>
    </>
  );
}

export default Products;
