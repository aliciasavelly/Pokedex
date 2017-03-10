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
      let items = poke.items.map ((item, idx) => {
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

/*
Object
attack
:
84
defense
:
65
id
:
122
image_url
:
"148.svg"
items
:
Array[3]
moves
:
Array[2]
name
:
"Dragonair"
poke_type
:
"dragon"
__proto__
:
Object



*/
