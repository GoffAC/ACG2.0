import React, { Component } from 'react';


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
      </div>
    );
  }
}

export default BannerImage;
