import React, {useEffect, useState} from "react";
import PokemonPage from "./PokemonPage";

function App() {

  const [pokemon, setPokemon]= useState([])

  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then(res=> res.json())
    .then(data=> setPokemon(data))
  },[])
  
  function handleNewPokemon(newPokemon){
    setPokemon([...pokemon, newPokemon])
  }
  

  return (
    <div className="App">
      <PokemonPage pokemon={pokemon} handleNewPokemon={handleNewPokemon} />
    </div>
  );
}

export default App;
