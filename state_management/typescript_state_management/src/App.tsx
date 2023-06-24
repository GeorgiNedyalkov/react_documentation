import { useState } from "react";

function usePokemon() {
  const [pokemon] = useState([]);

  return { pokemon };
}

function App() {
  return <div></div>;
}

export default App;
