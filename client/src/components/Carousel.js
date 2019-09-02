import React from 'react';
import { fetchVideoData, pickVideo } from '../actions/carouselActions.js';
import { VideoPlayerModal } from './video-player-modal';
import { Loading } from './Loading';
export class Carousel extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchVideoData());
  }
  selectVideo = (obj) => {
    this.props.dispatch(pickVideo(obj));
 }
  render() {
    const { videoData, selectedVideo, imageSearchedData, renderVideo } = this.props;

    // showing loading icon while data isn't available
    if(!videoData) {
      return <Loading />
    }
    ////////////////////////////////////////////////////

    if(imageSearchedData && !renderVideo) {
        return (
            <div className="carousel-wrapper">
              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                  { imageSearchedData.map((obj, index) => {
                      const hostName = obj.web_url.split('.com/')[0]+'.com/';
                      let url = '';
                      
                      if(obj.multimedia.length) {
                        url = hostName + obj.multimedia[0].url;
                      }
                      if(!index && url) {
                      return (
                      <div className="carousel-item active">
                          <img src={url} style={{height:"100%", width: '100%', objectFit: 'cover'}}/>
                      </div>
                      )}
                      if(url) {
                      return (
                      <div className="carousel-item">
                          <img src={url} style={{height:"100%", width: '100%', objectFit: 'cover'}} />
                      </div>
                      )}
                  })}
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
              </div>
            </div>  
          );
    }

    return (
      <div className="carousel-wrapper">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    
            <div className="carousel-inner">
            { videoData.map((obj, index) => {
                if(!index) {
                return (
                <div className="carousel-item active">
                    <img src={obj.thumbnail} style={{height:"100%", width: '100%', objectFit: 'cover'}}/>
                    <button onMouseDown={()=> {this.selectVideo(obj)}} type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    <i className="fa fa-play" aria-hidden="true" />
                    </button>
                </div>
                )}
                return (
                <div className="carousel-item">
                    <img src={obj.thumbnail} style={{height:"100%", width: '100%', objectFit: 'cover'}} />
                    <button onMouseDown={()=> {this.selectVideo(obj)}} type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    <i className="fa fa-play" aria-hidden="true" />
                    </button>
                </div>
                ) 
            })}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
         <VideoPlayerModal selectedVideo={selectedVideo} dispatch={this.props.dispatch}/>
      </div>  
    );
  }
}

export default Carousel;