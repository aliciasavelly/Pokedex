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
    let poke = this.props.poke;

    console.log(poke.image_url);
    return (
      <section className="pokemon-detail">
        <figure>
          <img src={`${poke.image_url}`} />
        </figure>

        <h1>{poke.name} </h1>
      </section>
    )
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
