import React from 'react';
import { pickVideo } from '../actions/carouselActions.js';

export class VideoPlayerModal extends React.Component {
  closeVideo = (e) => {
      this.props.dispatch(pickVideo(null))
  }
  render() {
    const { selectedVideo } = this.props;
    console.log('selectedVideo: ', selectedVideo)
    if(!selectedVideo) {
        return null;
    }
    const youtubeLink = selectedVideo.link.replace('watch?v=', 'embed/');
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={this.closeVideo}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{selectedVideo.title}</h5>
              <button onClick={this.closeVideo} type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{height: '30em'}}>
                <iframe width="100%" height="100%" src={youtubeLink}>
           </iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPlayerModal;