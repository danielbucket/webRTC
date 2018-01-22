import React, { Component } from 'react';

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
	    		source: window.URL.createObjectURL(stream),
	    		sourceID: stream.id
	    	})
		  } else {
		  	this.setState({
		  		source:stream,
		  		sourceID:stream.id
		  	})
		  }
		}

		const error = ERROR => console.log('ERROR: ', ERROR)

		navigator.getUserMedia(constraints, success, error)
	}


	componentWillMount() {
		if (!this.state.permissions) {
			console.log('permissions are set to false')
			// request media permissions here
		} else { this.accessCamera() }
	}

	componentDidMount() {

		if (this.state.source !== '') {
			this.props.getStreamURL({
					source:this.state.src,
					sourceID:this.state.sourceID,
					streamStatus:true
			})

			console.log('stream source active')
		}
		

	}


	render() {

		return (
			<video 	autoPlay
							src={ this.state.source }
							key={ this.state.sourceID }
							className="cameraImage"
							ref="shit">
			</video>
		)
	}
}