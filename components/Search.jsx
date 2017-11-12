// @flow

import React from 'react';
import { connect } from 'react-redux';
import AllPokemonTable from './AllPokemonTable';
import { setSearchTerm } from './actionCreators';

const Search = (props: { searchTerm: string, handleSearchTermChange: Function }) => (
	<div className="searchBox">
		<input
			type="text"
			placeholder="Search Pokemon"
			onChange={props.handleSearchTermChange}
			value={props.searchTerm}
		/>
		<AllPokemonTable />
	</div>
);

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = dispatch => ({
	handleSearchTermChange(event) {
		dispatch(setSearchTerm(event.target.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
