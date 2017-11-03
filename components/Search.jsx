import React, { Component } from 'react';
import AllPokemonTable from './AllPokemonTable';

class Search extends Component {
	state = {
		searchTerm: ''
	};

	handleSearchTermChange = event => {
		this.setState({ searchTerm: event.target.value });
	};

	render() {
		return (
			<div className="searchBox">
				<input
					type="text"
					placeholder="Search Pokemon"
					onChange={this.handleSearchTermChange}
					value={this.state.searchTerm}
				/>
				<AllPokemonTable searchTerm={this.state.searchTerm} />
			</div>
		);
	}
}

export default Search;
