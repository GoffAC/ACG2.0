import React, { Component } from 'react';

class ProjectCardLeft extends Component {
  render() {
    const { imageLocation, imageAltText, textDescription } = this.props;
    return (
      <div className="project">
        <div className="project__text project__text--left w3-animate-opacity">
          <p className="project__text__p">{textDescription}</p>
        </div>
        <div className="project__img project__img--right w3-animate-opacity">
          <img src={imageLocation} alt={imageAltText} />
        </div>
      </div>
    );
  }
}
export default ProjectCardLeft;
