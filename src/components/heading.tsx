export function Heading() {
  return (
    // esto ocupar debes<> del <div></div>
    <>
     <h1 className="text-center text-5xl font-semibold">
        REACT POKEDEX</h1>
     <h2 className="text-lg text-center mt-4">
        Aplicación demo para aprender a consumir el API{""}
        ,<a href="https://pokeapi.co" 
        target="_blank" 
        className="text-primary hover:underline"> PokeAPI
        </a></h2>
    </>
       
    
  );
}