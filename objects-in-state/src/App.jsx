
// import LudoBoard from './LudoBoard'
// import ToDoList from './ToDoList'


import { useState } from 'react';
import Lottery from './Lottery';
import './App.css';
import { sum } from './helper';

function App() {
  let winCondition= (ticket)=>{
    return sum(ticket)===15;
    // return ticket.every((num)=>(num===ticket[0]));
  }
 
  return (
    <>
     <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
