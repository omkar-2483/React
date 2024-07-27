import "./App.css";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counter/CounterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}> - </button> &nbsp; 
        count = {count} &nbsp;
        <button onClick={() => dispatch(increment())}> + </button>
      </div>
    </>
  );
}

export default App;
