// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import PokemonCard from './PokemonCard';
import Landing from './Landing';
import preload from '../data.json';

const App = () => (
	<Provider store={store}>
		<Switch>
			<div className="container">
				<Route
					exact
					path="/"
					component={(props: { searchTerm: string }) => (
						<Landing pokemons={Object.assign({ searchTerm: props.searchTerm }, props)} />
					)}
				/>

				<Route
					path="/pokemoncard/:name"
					component={(props: { match: Match }) => {
						const selectedPokemon = preload.pokemons.find(
							pokemon => props.match.params.name === pokemon.name
						);
						return <PokemonCard pokemon={selectedPokemon} {...props} />;
					}}
				/>
			</div>
		</Switch>
	</Provider>
);

export default App;
