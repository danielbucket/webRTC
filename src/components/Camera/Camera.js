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
			streamStatus: false
		}

		this.takePic = this.takePic.bind(this)
		this.captureImage = this.captureImage.bind(this)
		this.streamImage = this.streamImage.bind(this)
	}



	// fires when photo button is clicked
	// used to get the url stream address
	captureImage(stream) {
		console.log('stream: ', stream)
	}





	streamImage(streamObj) {
		console.log('streamImage: ', streamObj)
	}

	getContext(ctx) {
		const canvas = ctx.getContext('2d')
		console.log('canvas: ', canvas)

		// context.drawImage(this.this.state)
	}

	takePic(e) {
		console.log('takePic: ', e )

		this.setState(this.captureImage())
	}








	render() {
		return (
			<div className="camera-view-container">

				<CameraView />

				<Snapshot sourceURL={ this.state.source }
									sourceID={ this.state.sourceID }
									getContext={ this.getContext } />

				<CameraControl 	takePic={ this.takePic }
												streamImage={ this.state.streamImage }
												captureImage={ this.captureImage } />
			</div>
		)
	}
}