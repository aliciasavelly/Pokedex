import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => ({
  poke: state.poke
});

const mapDispatchToProps = dispatch => ({
  requestOnePokemon: (pokeId) => dispatch(requestOnePokemon(pokeId))
});

 export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
