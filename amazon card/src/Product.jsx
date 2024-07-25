import "./Product.css";
import Price from "./Price";

function Product({ title, price = 50, idx }) {
  let oldPrices =["12,399","11,999","3,395","2,899"];
  let newprices =["9,999","10,985","1,999","499"];
  let description =[
    ["8,000 DPI","5 Programmable buttons"],
    ["intuitive surface","designed for iPad"],
    ["design for iPad Pro","intuitive surface"],
    ["wireless","optical orientaion"],
  ];

  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newprices[idx]}/>
    </div>
  );
}

export default Product;
