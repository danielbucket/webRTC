import React, { Component } from 'react';
import CameraView from './CameraView/CameraView.js';
import { accessCamera } from './utils/accessCamera.js';

export default class Camera extends Component {
	// constructor() {
	// 	super()

	// }



	render() {
		let feed = accessCamera
		console.log('photo: ', feed)



		return (
			<div className="camera-view-container">
				<CameraView feed={ feed } />
				Tits and ass and tits and ass
			</div>
		)
	}
}