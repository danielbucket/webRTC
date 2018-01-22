import React, { Component } from 'react';

export default class CameraControl extends Component {
	constructor() {
		super()

	}

	
	render() {
		const { takePic } = this.props;

		return (
			<div>
				<button onClick={() => takePic() } >
					Take Photo
				</button>
			</div>
		)
	}
}