import React, { Component } from 'react';


class CookieMessage extends Component {
  
  render() {
    const { visitCount } = this.props;
    return (
      <div className="cookiemessage">
      <div className="footer">
            {visitCount == 2 ? <h1>Twice! I am a lucky man</h1> : ''}
            {visitCount == 3 ? (
              <h1>Yeah, alright I have just learned cookies</h1>
            ) : (
              ''
            )}
            {visitCount == 4 ? (
              <h1>
                Yeah alright, alright it isn't clever. It is just a counter.
              </h1>
            ) : (
              ''
            )}
            {visitCount == 5 ? <h1>But it is fun right!</h1> : ''}
            {visitCount == 10 ? <h1>Why are you still doing this?</h1> : ''}
            {visitCount == 12 ? (
              <h1>Honestly, there are no more of these</h1>
            ) : (
              ''
            )}
          </div>
      </div>
    );
  }
}

export default CookieMessage;
