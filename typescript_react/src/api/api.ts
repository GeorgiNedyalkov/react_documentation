export interface Pokemon {
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

export async function getAll(): Promise<Pokemon[]> {
  return fetch("/pokemon.json").then((response) => response.json());
}

export async function getByName(search: string): Promise<Pokemon[]> {
  const lowerCaseSearch = search.toLowerCase();
  return fetch("/pokemon.json")
    .then((response) => response.json())
    .then((pokemon: Pokemon[]) =>
      pokemon.filter(({ name }) => name.toLowerCase().includes(lowerCaseSearch))
    );
}
