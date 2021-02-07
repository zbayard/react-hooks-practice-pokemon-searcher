import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon, search}) {

  const filteredPokemon = pokemon.filter((poke) => poke.name.toLowerCase().includes(search.toLowerCase()));

  const pokemonObjects = filteredPokemon.map(pokemon => {
    return <PokemonCard id={pokemon.id} name={pokemon.name} hp={pokemon.hp} sprites={pokemon.sprites} key={pokemon.name} />
  })

  

    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        
        {pokemonObjects}
      </Card.Group>
    );

  
}

export default PokemonCollection;
