import React, { Component } from 'react';
import { accessCamera } from '../utils/accessCamera';

export default class CameraView extends Component {
	constructor() {
		super()

		this.state = {
			source: '',
			permissions: true,
			audio: false,
			video: true
		}
		this.handleVideoSource = this.handleVideoSource.bind(this)
	}

	componentWillMount() {
		this.handleVideoSource()
		console.log(this.state)
	}

	handleVideoSource() {
		this.setState( accessCamera(this.state) )
	}



	render() {

		return (
			<video 	autoPlay
							src={ this.state.source }
							className="cameraImage">
			</video>
		)
	}
}