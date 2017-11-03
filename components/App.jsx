import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import Landing from './Landing';

const App = () => (
	<BrowserRouter>
		<div className="container">
			<Route exact path="/" component={Landing} />

			<Route path="/pokemoncard" component={PokemonCard} />
		</div>
	</BrowserRouter>
);

export default App;
