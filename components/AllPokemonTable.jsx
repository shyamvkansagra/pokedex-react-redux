// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import preload from '../data.json';
import { setPokemonData } from './actionCreators';

const Wrapper = styled((Link: any))`
	overflow: hidden;
	text-decoration: none;
	text-align: center;
	color: red;
`;

const AllPokemonTable = (
	props: { searchTerm: string, markCaught: Function, pokemonData: pokemonData } // eslint-disable-line react/no-unused-prop-types
) => (
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
				{props.pokemonData.pokemonData
					.filter(
						pokemon => `${pokemon.name} ${pokemon.species}`.toLowerCase().indexOf(props.searchTerm) >= 0
					)
					.map(pokemon => (
						<tr className={pokemon.caught ? 'success' : ''} key={pokemon.name}>
							<Wrapper className="show-pokemon" to={`/pokemoncard/${pokemon.name}`}>
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
											props.markCaught(pokemon.name);
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

const mapStateToProps = state => ({ searchTerm: state.searchTerm, pokemonData: state.pokemonData });
const mapDispatchToProps = (dispatch: Function) => ({
	markCaught(pokemonName) {
		const caughtPokemon = preload.pokemons.find(pokemon => pokemon.name === pokemonName);
		caughtPokemon.caught = 1;
		dispatch(setPokemonData(preload.pokemons));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(AllPokemonTable);
