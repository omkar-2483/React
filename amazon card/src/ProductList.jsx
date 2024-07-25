import Product from "./Product.jsx";

function ProductList() {
  let style={
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <div style={style}>
      <Product title="Logitech MX Master" idx={0} />
      <Product title="Apple Pencil (2nd Gen)" idx={1}/>
      <Product title="Zebronics zeb-Transformer" idx={2}/>
      <Product title="Petronics Toad 23" idx={3}/>
    </div>
  );
}

export default ProductList;
