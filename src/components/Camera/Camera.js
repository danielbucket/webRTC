import React, { Component } from 'react';
import CameraView from './CameraView/CameraView.js';
import CameraControl from './CameraControl/CameraControl';
import Snapshot from './Snapshot/Snapshot';
import './Camera.css';

export default class Camera extends Component {
	constructor() {
		super()

		this.state = {
			source: '',
			sourceID: '',
			streamImage: '',
			streamStatus: false,
			canvas: {}
		}

		this.takePic = this.takePic.bind(this)
		this.getCanvasContext = this.getCanvasContext.bind(this)
	}



	// fires when photo button is clicked
	// used to get the url stream address
	takePic() {
		this.getCanvasContext()
	}



	getCanvasContext(ctx) {
		const canvas = ctx.getContext('2d')

		this.setState({ canvas:canvas })
	}



	render() {
		return (
			<div className="camera-view-container">

				<CameraView />

				<Snapshot	canvas={ this.state.canvas }
									getContext={ this.getCanvasContext } />

				<CameraControl 	takePic={ this.takePic }
												captureImage={ this.captureImage } />
			</div>
		)
	}
}