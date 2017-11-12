import { SET_SEARCH_TERM, POKEMON_CAUGHT } from './actions';

export function setSearchTerm(searchTerm) {
	return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function setPokemonData(pokemonData) {
	return { type: POKEMON_CAUGHT, payload: pokemonData };
}
