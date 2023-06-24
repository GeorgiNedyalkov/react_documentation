import { useState, useEffect, createContext, useContext } from "react";

interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

function usePokemonSource(): {
  pokemon: Pokemon[];
} {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("/pokemon.json")
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);

  return { pokemon };
}

function usePokemon() {
  return useContext(PokemonContext);
}

function PokemonList() {
  const { pokemon } = usePokemon();

  return (
    <div>
      {pokemon.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
}

const PokemonContext = createContext<ReturnType<typeof usePokemonSource>>(
  {} as unknown as ReturnType<typeof usePokemonSource>
);

function App() {
  return (
    <PokemonContext.Provider value={usePokemonSource()}>
      <PokemonList />
    </PokemonContext.Provider>
  );
}

export default App;
