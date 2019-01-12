import React, { Component }  from 'react';

class LeftArrow extends Component {
  render() {
    const { goToPrevSlide } = this.props;
    return (
      <div className="backArrow" onClick={goToPrevSlide}>
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
      </div>
    );
  }
}

export default LeftArrow;
