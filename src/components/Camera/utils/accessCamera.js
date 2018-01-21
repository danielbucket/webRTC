
export const accessCamera = state => {
	navigator.getUserMedia = navigator.getUserMedia ||
	    navigator.webkitGetUserMedia || navigator.mozGetUserMedia

	const constraints = {
	  audio: false,
	  video: true
	}
	// const video = document.querySelector('video')



	const successCallback = (stream, state) => {
	  window.stream = stream //stream available to console
		console.log("state: ", state)

	  if (window.URL) {
	    return state.videoSrc = window.URL.createObjectURL(stream)
	  } else {
	    return state.videoSrc = stream
	  }
	}



	const errorCallback = error => {
	  console.log('navigator.getUserMedia error: ', error);
	}


	console.log('state', state)
	return navigator.getUserMedia(constraints, successCallback, errorCallback)
};