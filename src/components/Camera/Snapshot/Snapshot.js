import React, { Component } from 'react';

export default class Snapshot extends Component {
	constructor() {
		super()

		this.state = {
			ctx: {}
		}

		this.getCtx = this.getCtx.bind(this)
	}

	getCtx(e) {
		console.log('e: ', e)

		// const newCTX = e.getContext('2d')
		// this.setState({
			// ctx: newCTX
		// })
	}


	render() {
		const { sourceURL, sourceID } = this.props;

		return (
			<canvas id={ sourceID }
							ref={ w => this.getCtx(w) } >
			</canvas>
		)
	}
}