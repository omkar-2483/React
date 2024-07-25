import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0); //initialization

  function incCount(){
    setCount((currCount)=>{
        return currCount+1;
    })
    setCount((currCount)=>{
        return currCount+1;
    })
  }
  return(
    <div>
        <button onClick={incCount}>Count = {count}</button>
    </div>
  )
}
 