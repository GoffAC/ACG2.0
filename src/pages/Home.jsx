import React, { Component } from 'react';

import '../styles/reset.css';
import '../styles/App.css';

import Bio from '../imports/Bio';
import BannerImage from '../imports/BannerImage';
import CookieMessage from '../imports/CookieMessage';
import Nav from '../imports/Nav';
import RobotNaming from '../imports/RobotNaming';

class Home extends Component {
  

  render() {
    const { visitCount } = this.props;

    return (
      <React.Fragment>
        <BannerImage />
        <div className="banner__overlay wrap">
          <Nav lightBackground={false} />
          <div className="banner__bio">
            <Bio />
          </div>
        </div>
        <div className="main wrap">
          <RobotNaming />
          <CookieMessage visitCount={visitCount} />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
