import React from 'react';

class PokemonDetail extends React.Component {

  componentDidMount() {
    this.props.requestOnePokemon(this.props.params.id);
  };

  componentWillReceiveProps(ownProps) {
    if (this.props.params.id !== ownProps.params.id){
      this.props.requestOnePokemon(ownProps.params.id);
    }
  }

  render () {
    // debugger;
    if (!!this.props.poke.name) {
      let poke = this.props.poke;
      let moves = poke.moves.join(', ');
      // debugger;
      let items = poke.items.map((item, idx) => {
        // debugger;
        return <li key={idx}>{item.name}</li>
      });
      // debugger;
      return (
        <section className="pokemon-detail">
          <figure>
            <img src={`${poke.image_url}`} />
          </figure>
          <ul>
            <li>
              <h1>{poke.name} </h1>
            </li>
            <li>Type: {poke.poke_type}</li>
            <li>Attack: {poke.attack}</li>
            <li>Defense: {poke.defense}</li>
            <li>Moves: {moves}</li>
          </ul>
          <section className="pokemon-items">
            <ul>
              Items: {items}
            </ul>
            <div>before this.props.children!!</div>
            <ul>
              {this.props.children}
            </ul>
          </section>
        </section>
      )
    } else {
      return (<div></div>);
    }
  }

}

export default PokemonDetail;
