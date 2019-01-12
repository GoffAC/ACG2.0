import React, { Component } from 'react';
import Nav from '../imports/Nav';
import PotBox from '../imports/PotBox'

class Page404 extends Component {
  render() {
    return (
      <div className="mainwrap">
        <Nav lightBackground={true} />
        <div className="potboxes">
        <PotBox name="Triathlon"/>
        <PotBox name="Work"/>
        <PotBox name="Sleep"/>
        </div>
      </div>
    );
  }
}

export default Page404;
