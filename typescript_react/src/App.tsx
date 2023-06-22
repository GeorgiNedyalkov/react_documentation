import { memo, useState, useEffect, useMemo, useCallback } from "react";

import Header from "./Header";

import { Pokemon, getByName } from "./api/api";

interface PokemonWithPower extends Pokemon {
  power: number;
}

const calculatePower = (pokemon: Pokemon) =>
  pokemon.hp +
  pokemon.attack +
  pokemon.defense +
  pokemon.special_attack +
  pokemon.special_defense +
  pokemon.speed;

let tableRender = 0;

const PokemonTable: React.FunctionComponent<{
  pokemon: PokemonWithPower[];
}> = ({ pokemon }) => {
  console.log(`tableRender = ${tableRender++}`);
  return (
    <table className="w-7/12 text-center mt-5">
      <thead>
        <tr className="font-bold">
          <td>ID</td>
          <td>Name</td>
          <td>Type</td>
          <td colSpan={6}>Stats</td>
          <td>Power</td>
        </tr>
      </thead>
      <tbody>
        {pokemon.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{p.type.join(",")}</td>
            <td>{p.hp}</td>
            <td>{p.attack}</td>
            <td>{p.defense}</td>
            <td>{p.special_attack}</td>
            <td>{p.special_defense}</td>
            <td>{p.speed}</td>
            <td>{p.power}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

let appRender = 0;

const MemoisedPokemonTable = memo(PokemonTable);

export default function App() {
  console.log(`App rendered = ${appRender++}`);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [threshold, setThreshold] = useState(0);
  const [search, setSearch] = useState("");

  const onSetThreshold = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setThreshold(parseInt(e.target.value, 10)),
    []
  );

  const onSetSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  useEffect(() => {
    getByName(search).then(setPokemon);
  }, [search]);

  const pokemonWithPower = useMemo(
    () =>
      pokemon.map((p) => ({
        ...p,
        power: calculatePower(p),
      })),
    [pokemon]
  );

  const countOverThreshold = useMemo(
    () => pokemonWithPower.filter((p) => p.power > threshold).length,
    [pokemonWithPower, threshold]
  );

  const min = useMemo(
    () => Math.min(...pokemonWithPower.map((p) => p.power)),
    [pokemonWithPower]
  );
  const max = useMemo(
    () => Math.max(...pokemonWithPower.map((p) => p.power)),
    [pokemonWithPower]
  );

  return (
    <>
      <Header />
      <div className="flex m-2">
        <div className="mx-2">Search</div>
        <input
          value={search}
          onChange={onSetSearch}
          className="border mr-2 p-2"
          type="text"
        />
        <div className="mx-2">Power threshold: </div>
        <input
          className="border mr-2 p-2"
          type="text"
          value={threshold}
          onChange={onSetThreshold}
        />
        <div className="mx-2">Count over threshold: {countOverThreshold}</div>
      </div>
      <div className="flex gap-11">
        <MemoisedPokemonTable pokemon={pokemonWithPower} />
        <div className="flex flex-col gap-2">
          <div>Min: {min}</div>
          <div>Max: {max}</div>
        </div>
      </div>
    </>
  );
}
