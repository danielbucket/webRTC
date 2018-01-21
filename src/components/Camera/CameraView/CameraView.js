import React, { Component } from 'react';
// import { accessCamera } from '../utils/accessCamera';

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

		this.accessCamera = this.accessCamera.bind(this)
	}







	accessCamera() {
		navigator.getUserMedia = navigator.getUserMedia ||
	    navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

	  const constraints = {
	  	audio: this.state.audio,
	  	video: this.state.video
	  }

		const success = stream => {
			window.stream = stream;

		  if (window.URL) {
	    	this.setState({
	    		source: window.URL.createObjectURL(stream)
	    	})
		  } else {
		  	this.setState({ source:stream })
		  }
		}

		const error = ERROR => console.log('ERROR: ', ERROR)

		navigator.getUserMedia(constraints, success, error)
	}


	componentWillMount() {
		this.accessCamera()
		console.log('will: ', this.state.source)
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