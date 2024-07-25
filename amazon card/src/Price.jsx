export default function Price({ oldPrice, newPrice }) {
  let oldStyle = {
    textDecorationLine: "line-through",
  };
  let newStyle={
    fontWeight : "bold",
  }
  let styles={
    backgroundColor:"#e0c367",
    height:"43px",
    borderBottomLeftRadius: "24px",
    borderBottomRightRadius: "24px",
  }
  return (
    <div style={styles}>
      <span style={oldStyle}>Rs. {oldPrice}</span>
      &nbsp; &nbsp;
      <span style={newStyle}>{newPrice}/-</span>
    </div>
  );
}
