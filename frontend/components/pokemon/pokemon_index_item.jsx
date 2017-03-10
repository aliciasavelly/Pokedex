import React from 'react';
import { Link } from 'react-router';

const PokemonIndexItem = ({ pokemon }) => (
  <li>
    <Link to={`/pokemon/${pokemon.id}`}>
      <img src={pokemon.image_url} height="100px" width="100px" title={`${pokemon.name} is awesome!`} alt={`Image of ${pokemon.name}`} />
      <br/>
      <div className="pokemon-name">{pokemon.name}</div>
    </Link>
  </li>
)

export default PokemonIndexItem;
