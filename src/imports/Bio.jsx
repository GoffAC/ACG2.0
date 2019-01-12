import React, { Component } from 'react';

class Bio extends Component {
  render() {
    return (
      <div className="bio">
        <div className="bio__img">
            <img src="/pp.jpg" alt="derpface" />
        </div>
        <div className="bio__info">
          <div className="bio__info__name">Alex Goff</div>
          <div className="bio__info__job">Emerging Technology Consultant</div>
        </div>
      </div>
    );
  }
}

export default Bio;
