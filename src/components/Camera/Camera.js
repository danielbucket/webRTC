import React, { Component } from 'react';
import CameraView from './CameraView/CameraView';

export default class Camera extends Component {
	constructor() {
		super()

		this.getImage = this.getImage.bind(this)
	}


	getImage() {
		const connectCamera = navigator.mediaDevices.getUserMedia({
	  	audio: true,
	  	video: { width: 1280, height: 720 }
		})
		.then(pokeAtIt => {
			console.log('ID: ', pokeAtIt.id)
			const id = pokeAtIt.id


			console.log(new MediaStream())
		})
		.then(stream => stream)
		.catch(err => console.log("ERROR: ", err))
	}

	render() {
		const image = this.props.image;
		this.getImage()

		return (
			<div className="camera-view-container">
				<CameraView image={'patsy cline'} />
				Tits and ass and tits and ass
			</div>
		)
	}
}