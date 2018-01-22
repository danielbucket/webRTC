import React, { Component } from 'react';

export default class CameraControl extends Component {
	constructor() {
		super()

	}

	
	render() {
		const { takePic, getStreamURL } = this.props;

		return (
			<div>
				<button onClick={e => {
					takePic(e)
					getStreamURL()
				}} >
					Take Photo
				</button>
			</div>
		)
	}
}