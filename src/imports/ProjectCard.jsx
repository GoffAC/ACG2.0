import React, { Component } from 'react';
import ProjectCardLeft from "./ProjectCardLeft";
import ProjectCardRight from "./ProjectCardRight";


class ProjectCard extends Component {
  render() {
    const { imageLocation, imageAltText, leftOrRight, textDescription  } = this.props;
    return (
      <div>
        {(leftOrRight.toLowerCase() === 'right') ? (
          <ProjectCardRight imageLocation={imageLocation} imageAltText={imageAltText} textDescription={textDescription} />
        ) : (
          <ProjectCardLeft imageLocation={imageLocation} imageAltText={imageAltText} textDescription ={textDescription} />
        )}
      </div>
    );
  }
}

export default ProjectCard;
