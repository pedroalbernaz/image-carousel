import React from 'react';
import './App.css';
import Carousel from './containers/CarouselContainer';
import { fetchImageData } from './actions/carouselActions.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  queryApi = (e) => {
    this.setState({search: e.target.value});
    this.props.dispatch(fetchImageData(e.target.value))
  }
  render() {
    return (
      <div className="card">
        <h1 className="card-header">
          IMAGE CAROUSEL
        </h1>
        <div className="card-body">
          <div className="form-group">
            <div className="search-wrapper">
              <input type="search" className="form-control" placeholder="Search" value={this.state.search} onChange={this.queryApi}/>
              <i className="fas fa-search"></i>
            </div>
          <small  className="form-text text-muted">Search for new images.</small>
        </div>
          <Carousel renderVideo={!this.state.search}/>
        </div>
      </div>
    );
  }
}

export default App;
