import React, { Component } from 'react';

export default class Snapshot extends Component {
	constructor() {
		super()

		this.state={
			// false only during initial render
			// or until camera is allowec to be accessed
			ctx:false,
			canvas: {}
		}

		this.getCtx = this.getCtx.bind(this)
	}

	getCtx(e) {
		if (!this.state.ctx) {
			this.setState({
				ctx:e.getContext('2d')
			})
		}
	}

	componentDidUpdate(prevProps, prevState) {
		// new props coming in will be the still image capture
		console.log('prevProps: ', prevProps)
		console.log('prevState: ', prevState)

		if (prevProps !== prevState) {
			this.setState({ canvas:prevProps })
		}
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