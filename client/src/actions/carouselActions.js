import { createAction } from "redux-act";
export const setImageData = createAction("IMAGE_DATA");
export const setVideoData = createAction("VIDEO_DATA");
export const selectVideo = createAction("SELECT_VIDEO")
export function fetchImageData(query) {
  return async dispatch => {
    if(query) {
      const res = await fetch(`/api/${query}`);
      const data = await res.json();
      let imageData = null;
      if(data.response) {
        imageData = data.response.docs;
      }
      dispatch(setImageData(imageData));
    } else {
      dispatch(setImageData(null));
    }
  };
}
export function pickVideo(selectedVideo) {
  return async dispatch => {
    dispatch(selectVideo(selectedVideo));
  }
}
export function fetchVideoData() {
  return async dispatch => {
    setTimeout(async() => {
      const res = await fetch('/api');
      const data = await res.json();
      const videoData = data.beauty_interviews;
      dispatch(setVideoData(videoData));
    }, 1000);
  }
}
