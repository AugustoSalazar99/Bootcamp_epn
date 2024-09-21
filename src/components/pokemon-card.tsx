export function PokemonCard(props:{name : string; url:string}){
    // usar prosp
    return (
        <div>
         <p >{props.name} </p>
         <p >{props.url}</p>
         
    
        </div>
    );
}