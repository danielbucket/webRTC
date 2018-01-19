import React, { Component } from 'react';


const CameraView = ({ image }) => {
	console.log(image)

	return (
		<div className="cameraImage">
			{ image }
		</div>
		)
}

export default CameraView;