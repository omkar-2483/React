import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3 ,winCondition}) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinnig = winCondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n));
  };
  return (
    <div>
      <h1>Lottery GAme !</h1>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>Buy New ticket</button>
      <h3>{isWinnig && "Congratulations, you won !"}</h3>
    </div>
  );
}
