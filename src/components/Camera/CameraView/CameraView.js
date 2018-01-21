import React, { Component } from 'react';
import {accessCamera} from '../utils/accessCamera';

export default class CameraView extends Component {
	constructor() {
		super()

		this.state = {
			videoSrc: {},
			permissions: true
		}

	}

	componentDidMount(){
		if (this.state.permissions) {
			this.setState({
				videoSrc: accessCamera(this.state)
			})
		}
	}



	render() {

		console.log("CameraView.state: ", this.state)

		return (
			<video 	autoPlay
							src={ this.state.videoSrc }
							className="cameraImage">
			</video>
		)
	}
}