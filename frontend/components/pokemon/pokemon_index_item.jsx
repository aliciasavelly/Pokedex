import React from 'react';

const PokemonIndexItem = ({ pokemon }) => (
  <li>
    <img src={pokemon.image_url} height="100px" width="100px" title={`${pokemon.name} is awesome!`} alt={`Image of ${pokemon.name}`} />
    <br/>
    <div className="pokemon-name">{pokemon.name}</div>
  </li>
)

export default PokemonIndexItem;
