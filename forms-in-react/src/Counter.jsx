import { useEffect, useState } from "react";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  let incCountx = () => {
    setCountx((currCount) => currCount + 1);
  };
  let incCounty = () => {
    setCounty((currCount) => currCount + 1);
  };

  useEffect(
    function printSomething() {
      console.log("sede effect function for first time render");
    },
    []
  );

  return (
    <div>
      <h2>countX = {countx}</h2>
      <button onClick={incCountx}>+1</button>

      <h2>countY = {county}</h2>
      <button onClick={incCounty}>+1</button>
    </div>
  );
}
