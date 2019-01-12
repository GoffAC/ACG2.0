import React, { Component } from 'react';
import '../styles/reset.css';
import '../styles/App.css';
import Nav from '../imports/Nav';
import BannerImage from '../imports/BannerImage';
import CookieMessage from '../imports/CookieMessage';

class Home extends Component {
  render() {
    const { visitCount } = this.props;

    return (
      <div>
        <BannerImage showBio={true} />
        <div className="mainwrap">
          <Nav lightBackground={false} />
          <div className="about" />
        </div>
        <div className="edgewrap">
          <CookieMessage visitCount={visitCount}/>
        </div>
      </div>
    );
  }
}

export default Home;
