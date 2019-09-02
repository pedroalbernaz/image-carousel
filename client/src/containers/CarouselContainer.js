import { connect } from "react-redux";
import { Carousel } from "../components/Carousel";

const mapStateToProps = state => {
  const Carousel = state.carouselReducer;
  return {
    videoData: Carousel.get("videoData"),
    imageSearchedData: Carousel.get("imageSearchedData"),
    selectedVideo: Carousel.get("selectedVideo")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

const CarouselContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Carousel);

export default CarouselContainer;