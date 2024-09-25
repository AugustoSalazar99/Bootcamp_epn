

export function PokemonCard(props: { name: string; url: string }) {
  const { name, url } = props;

  // usar prosp
  const pokemonId = url.slice(0, -1).split("/").pop();
  return (
    //   {/* hay otra forma de hacerlo
    //      {props.name} {props.url}

    //   {/* <p>{name}</p>
    //   <p>{url}</p> */}

    <div className="card border bg-base-100 col-span-4 shadow-xl">
      <figure>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
          //alt={name}
          alt=""
          width={200}
          height={200}
          className="size-[200px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
        {/* <p>{url}</p> */}
        <p>Pokedex ID: {pokemonId}</p>
        <div className="card-actions justify-end">
          <a href={`/pokemon/${pokemonId}`} className="btn btn-primary">Ver Pokemon</a>
        </div>
      </div>
    </div>
  );
}
