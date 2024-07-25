import Product from "./Product.jsx";

function ProductList() {
  return (
    <>
      <Product title="Phone" price={2000} />
      <Product title="Laptop" price="5000"/>
      <Product title="Smart Watch" />
    </>
  );
}

export default ProductList;
