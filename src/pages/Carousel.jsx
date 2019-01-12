// https://medium.com/@ItsMeDannyZ/build-an-image-slider-with-react-es6-264368de68e4
import React, { Component } from 'react';
import Nav from '../imports/Nav';
import Slide from '../imports/CarouselSlider';
import LeftArrow from '../imports/CarouselArrowLeft';
import RightArrow from '../imports/CarouselArrowsRight';

class Carousel extends Component {
  constructor() {
    super();

    this.state = {
      images: [
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
      ],
      currentIndex: 0
    }
  }

  goToPrevSlide = () => {};

  goToNextSlide = () => {};

  render() {
    const { } = this.props
    
    return (
      <div>
        <div className="mainwrap">
          <Nav lightBackground={true} />
        </div>
        <div className="slider">
          <Slide />

          <LeftArrow goToPrevSlide={this.goToPrevSlide} />
          <RightArrow goToNextSlide={this.goToNextSlide} />
        </div>
      </div>
    );
  }
}

export default Carousel;
