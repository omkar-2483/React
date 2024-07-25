import './App.css'
//import Title
import Title from "./Title.jsx";
import ProductList from "./ProductList.jsx";
import MsgBox from './MsgBox.jsx';

function App() {
  return (
    <>
      <MsgBox userName="Omkar" textColor="green" />
      <ProductList />
    </>
  );
}

export default App
