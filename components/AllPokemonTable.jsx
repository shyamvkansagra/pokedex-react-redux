// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import preload from '../data.json';

const Wrapper = styled((Link: any))`
	overflow: hidden;
	text-decoration: none;
	text-align: center;
`;

class AllPokemonTable extends Component {
	state = {
		pokemonData: preload.pokemons
	};

	props: {
		searchTerm: string
	};

	markCaught = pokemonName => {
		const caughtPokemon = preload.pokemons.find(pokemon => pokemon.name === pokemonName);
		caughtPokemon.caught = 1;
		this.setState({ pokemonData: preload.pokemons });
	};

	render() {
		return (
			<div className="all-pokemon-table">
				<table className="pokemon-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Type</th>
							<th>Stage</th>
							<th>Species</th>
							<th>Caught?</th>
						</tr>
					</thead>
					<tbody>
						{preload.pokemons
							.filter(
								pokemon =>
									`${pokemon.name} ${pokemon.species}`.toLowerCase().indexOf(this.props.searchTerm) >=
									0
							)
							.map(pokemon => (
								<tr className={pokemon.caught ? 'success' : ''} key={pokemon.name}>
									<Wrapper className="show-pokemon" to="/pokemoncard">
										<td>{pokemon.name}</td>
									</Wrapper>
									<td>{pokemon.type}</td>
									<td>{pokemon.stage}</td>
									<td>{pokemon.species}</td>
									<td>
										{pokemon.caught ? (
											'Caught!'
										) : (
											<button
												type="button"
												className="catchButton"
												onClick={() => {
													this.markCaught(pokemon.name);
												}}
											>
												Catch
											</button>
										)}
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		);
	}
}
export default AllPokemonTable;
