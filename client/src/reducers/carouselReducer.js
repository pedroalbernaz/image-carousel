import { fromJS } from "immutable";
import { createReducer } from "redux-act";

import { setImageData, setVideoData, selectVideo } from "../actions/carouselActions";
const initialState = fromJS({
  videoData: null,
  imageSearchedData: null,
  selectedVideo: null
});
const carouselReducer = createReducer(
  {
    [setImageData]: (state, imageSearchedData) => {
      return state.merge({ imageSearchedData });
    },
    [setVideoData]: (state, videoData) => {
      return state.merge({ videoData });
    },
    [selectVideo]: (state, selectedVideo) => {
      return state.merge({ selectedVideo });
    }
  },
  initialState
);
export default carouselReducer;
