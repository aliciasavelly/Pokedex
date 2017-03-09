import React from 'react';
// import { requestAllPokemon } from '../../actions/pokemon_actions';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
    // this.props = props;
  }

  componentDidMount() {
    this.props.requestAllPokemon();
    // debugger;.
  }

  render() {
    let pokemon = this.props.pokemon.map( (poke, idx) => (
      <li key={idx}>
        <img src={poke.image_url} height="100px" width="100px" title={`${poke.name} is awesome!`} alt={`Image of ${poke.name}`} />
        <br/>
        <div className="pokemon-name">{poke.name}</div>
      </li>
    ))

    return (
      <div>
        <ul>
          {pokemon}
        </ul>
      </div>
    )
  }
}

export default PokemonIndex;
