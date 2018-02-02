import React, { Component } from 'react';
import './videoPlayer.css'

class VideoPlayer extends Component{
  state = {
    isLoading: true,
  }

  handleLoad = () => {
    console.log("HANDLING LOAD")
      this.setState({
          isLoading: false,
        })
  }

  componentDidMount(){
    console.log("MOUNTED")
    this.vid = document.getElementById('project-video')
    this.vid.addEventListener("canplay", this.handleLoad)
  }

  componentWillReceiveProps(nextProps){
    console.log("NEXT PROPS", nextProps)
  }

  componentWillUnmount(){
    this.vid.removeEventListener("canplay", this.handleLoad)
  }

  render(){
    console.log("VIDEOPLAYER", this.props, "THIS.VID", this.vid, "THIS.STATE", this.state)
    var loader = "";
    var videoHeight = "";
    if(this.state.isLoading){
      loader = <div className="loader"></div>
      videoHeight = 'hidden'
    } else {
      loader = ""
      videoHeight = 'visible'
    }
    return(
      <div className="video-player">
        {loader}
        <video style={{visibility: `${videoHeight}`}}id="project-video" src={this.props.video}  playsInline autoPlay loop muted/>
      </div>
    )
  }
}

export default VideoPlayer
