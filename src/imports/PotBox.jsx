import React, { Component } from 'react';

class PotBox extends Component {
  render() {
    // const showBio = this.props.showBio;
    // const titleText = this.props.titleText;
    const { name } = this.props;
    return (
      <div className="potboxes">
        <div className="potbox">{name}</div>
      </div>
    );
  }
}

export default PotBox;
