import { useEffect, useState } from "react";

export default function Joker() {
  let [joke, setJoke] = useState({});

  const url = "https://official-joke-api.appspot.com/random_joke";

  const getJoke = async () => {
    let result = await fetch(url);
    let jsonRespone = await result.json();
    setJoke({ setup: jsonRespone.setup, punchline: jsonRespone.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let result = await fetch(url);
      let jsonRespone = await result.json();
      setJoke({ setup: jsonRespone.setup, punchline: jsonRespone.punchline });
    }
    getFirstJoke();
  }, []);

  return (
    <div>
      <h3>Joker</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getJoke}>Get New Joke</button>
    </div>
  );
}
