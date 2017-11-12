import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, POKEMON_CAUGHT } from './actions';
import preload from '../data.json';

const searchTerm = (state = '', action) => {
	if (action.type === SET_SEARCH_TERM) {
		return action.payload;
	}
	return state;
};

const pokemonData = (state = { pokemonData: preload.pokemons }, action) => {
	if (action.type === POKEMON_CAUGHT) {
		return Object.assign({}, state, { pokemonData: action.payload });
	}
	return state;
};

const rootReducer = combineReducers({ searchTerm, pokemonData });

export default rootReducer;
