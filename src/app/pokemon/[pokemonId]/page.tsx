// si son pagina deben export default
import SinglePokemon from "@/components/single-pokemon";
import { RouteParams } from "@/types/route-params"; 

type RouteParams = {
    params: Params;
};

type Params = {
    pokemonId: string;
};

export default function PokemonPage({params}: RouteParams) {
  return(
<div className="flex flex-col justify-center h-screen container">
    <SinglePokemon pokemonId={params.pokemonId} />
</div>
);
}
