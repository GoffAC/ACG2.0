import React, { Component }  from 'react';

class RightArrow extends Component {
  render() {
    const { goToNextSlide } = this.props;
    return (
      <div className="nextArrow" onClick={goToNextSlide}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </div>
    );
  }
}

export default RightArrow;
