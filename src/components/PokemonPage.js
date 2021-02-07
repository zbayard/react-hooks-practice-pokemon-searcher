import React, {useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemon, handleNewPokemon}) {

  const [search, setSearch] = useState("")

 
 

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleNewPokemon={handleNewPokemon} />
      <br />
      <Search search={search} setSearch={setSearch} />
      <br />
      <PokemonCollection search={search} pokemon={pokemon} />
    </Container>
  );
}

export default PokemonPage;
