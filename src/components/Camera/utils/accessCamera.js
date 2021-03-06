export const accessCamera = state => {
	navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

  const constraints = {
  	audio: state.audio,
  	video: state.video
  }

	const success = stream => {
		window.stream = stream;

	  if (window.URL) {
    	state.source = window.URL.createObjectURL(stream)
	  } else { state.source = stream }

		return { source: state.source,
					 	 sourceID: stream.id }
	}

	const error = ERROR => console.log('ERROR: ', ERROR)

	navigator.getUserMedia(constraints, success, error)
}