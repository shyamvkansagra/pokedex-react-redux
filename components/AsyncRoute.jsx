import React, { Component } from 'react';

class AsyncRoute extends Component {
	state = {
		loaded: false
	};

	componentDidMount() {}
	render() {
		if (this.state.loaded) {
			// return <this.
		}
		return <h1>Loading, please wait</h1>;
	}
}

export default AsyncRoute;
