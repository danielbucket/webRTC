import React, { Component } from 'react';
import { accessCamera } from '../utils/accessCamera';

export default class CameraView extends Component {
	constructor() {
		super()

		this.state = {
			source: '',
			sourceID: '',
			permissions: true,
			audio: false,
			video: true
		}

		this.handleVideoSource = this.handleVideoSource.bind(this)
	}

	componentWillMount() {
		this.handleVideoSource()
		// console.log('will: ', this.state.source)
	}

	handleVideoSource() {
		const source = accessCamera(this.state)
		console.log('accessCamera: ', source)
	}



	render() {
		// console.log('sourcery: ', accessCamera(this.state))

		return (
			<video 	autoPlay
							src={this.state.source}
							key={this.state.sourceID}
							className="cameraImage">
			</video>
		)
	}
}