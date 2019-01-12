import React, { Component } from 'react';
import Bio from './Bio';

class BannerImage extends Component {
  render() {
    // const showBio = this.props.showBio;
    // const titleText = this.props.titleText;
    const { showBio } = this.props;
    return (
      <div className="banner">
        <img
          src="/background.jpg"
          className="banner__img"
          alt="some clouds innit"
        />
        <div className="banner__bio">
        {showBio ? <Bio /> : null}
        </div>
      </div>
    );
  }
}

export default BannerImage;
