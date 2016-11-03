import React, {Component} from 'react';

/**
 * Displays a mirror using the computer's webcam.
 */
class Mirror extends Component {
  /**
   * Load the video after the component mounted.
   */
  componentDidMount() {
    // Get the user's media
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia ||
      navigator.oGetUserMedia;
    if (navigator.getUserMedia) {
      navigator.getUserMedia({video: true}, this.handleVideo, this.videoError);
    }
  }

  /**
   * Success callback for asking for the user's video.
   * @param stream
   */
  handleVideo(stream) {
    let video = document.querySelector("#videoElement");
    video.src = window.URL.createObjectURL(stream);
  }

  /**
   * Handles video errors
   * @param error
   */
  videoError(error) {
    console.error(error);
  }

  render() {
    return (
      <div className="Mirror">
        <video autoPlay="true" id="videoElement"/>
      </div>
    );
  }
}

export default Mirror;