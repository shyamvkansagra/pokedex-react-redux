// @flow

import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
	width: 46%;
	float: center;
	margin-right: 10px;
`;

const PokemonCard = (props: { pokemon: {} }) => {
	const { name, type, stage, species } = props.pokemon;

	return (
		<div className="pokemon-card">
			<Image alt={`${name} Poster`} src={`/public/images/${name}.png`} />
			<h1>Name: {name}</h1>
			<h1>Type: {type}</h1>
			<h1>Stage: {stage}</h1>
			<h1>Species: {species}</h1>
		</div>
	);
};

export default PokemonCard;
