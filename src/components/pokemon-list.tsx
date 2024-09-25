"use client";
import { useEffect, useState } from "react";
import { PokemonCard } from "@/components/pokemon-card";


type Pokemon = {
  name: string;
  url: string;
};

export function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=120").then(
      (response) =>
        response.json().then((data) => {
          setPokemons(data.results);
        })
    );
    setLoading(false);
  }, []);

  return (
    <>
    {loading? <p>Cargando...</p>: ""}
      <div className="grid grid-cols-12 gap-4 mt-8">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.url}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </div>
    </>
  );
}
