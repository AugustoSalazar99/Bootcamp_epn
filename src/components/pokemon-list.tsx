import { useEffect, useState } from "react";
import { PokemonCard } from "./pokemon-card";

type Pokemon = {
  name: string;
  url: string;
};

export function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
 
  // consumir la api por useEffect
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/").then((response) => 
      response.json().then((data) => {
        setPokemons(data.results);
      })
    );
  }, []);
  return (
    <>
  
      <div className="grid grid-cols-12 gap-4 mt-8">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.url} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </>
  );
}
