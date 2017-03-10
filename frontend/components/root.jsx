import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Router, Route, hashHistory } from 'react-router';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import { requestOnePokemon, requestOneItem } from '../actions/pokemon_actions';
import ItemDetailContainer from './pokemon/item_detail_container';


const Root = ({ store }) => {
  const fetchPokemon = nextState => {
    // debugger;
    return store.dispatch(requestOnePokemon(nextState.params.id));
  }

  const fetchOneItem = nextState => {
    // debugger;
    return store.dispatch(requestOneItem(nextState.params.itemId));
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={ PokemonIndexContainer } >
          <Route path='pokemon/:id' component={ PokemonDetailContainer }
                 onEnter={fetchPokemon}>
            <Route path="item/:itemId" component={ ItemDetailContainer }
                 onEnter={fetchOneItem}/>
          </Route>
        </Route>
      </Router>
    </Provider>
  )
};

export default Root;
