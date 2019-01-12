import React, { Component } from 'react';

import { imageRetrieve } from '../tools/robotPicAPI';

class RobotNaming extends Component {
  constructor() {
    super();

    this.state = { imageURL: '', string: '' };
  }

  updateTextString = (event) => {
    console.log('updateTextString called');

    this.setState({
      string: event.target.value
    })
  }

  getImage = () => {
    console.log('getImage called');

    imageRetrieve(this.state.string).then(response => {
      const info = JSON.parse(response);
      this.setState({ imageURL: info.imageUrl }); //need to use setState() as you can't directly mutate the state
    });
  }

  render() {
    return (
      <div className="robotnaming">
        <form onSubmit={this.getImage}>
          <input type="text" onChange={this.updateTextString} />
          <input type="submit" value="Submit" />
        </form>
        <img src={this.state.imageURL} />
      </div>
    );
  }
}

export default RobotNaming;
