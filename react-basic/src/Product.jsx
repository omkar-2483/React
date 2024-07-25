import "./Product.css";
function Product({ title, price = 50}) {
    let isDiscount = price>3000;
    return (
      <div className="Product" style={{backgroundColor : isDiscount? "yellow":""}}>
        <h2>{title}</h2>
        <p>Price: {price}</p>
        {isDiscount? <p>Discount of 5 %</p>: <a href="#">Get Discount</a>}
      </div>
    );
  }


// function Product({ title, price = 50, features = {}, features2 = [] }) {
//   return (
//     <div className="Product">
//       <h2>{title}</h2>
//       <p>Price: {price}</p>
//       <p>features: {features.a}</p>
//       <p>
//         features:
//         {features2.map((feature) => (
//           <li>{feature}</li>
//         ))}
//       </p>
//     </div>
//   );
// }

export default Product;
