import React, { Component } from 'react';

class ProjectCardRight extends Component {
  render() {
    const { imageLocation, imageAltText , textDescription} = this.props;
    return (
      <div className="project">
        <div className="project__img project__img--left w3-animate-opacity">
          <img src={`${ imageLocation ? imageLocation : "/logo.png"}`} alt={imageAltText} />
        </div>
        <div className="project__text project__text--right w3-animate-opacity">
          <p className="project__text__p">{textDescription}</p>
        </div>
      </div>
    );
  }
}
export default ProjectCardRight;
