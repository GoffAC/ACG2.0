import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //Redirect
import Page404 from './pages/404';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Carousel from './pages/Carousel';
import Time from './pages/Time';

const visitedCookiePresent = cookieString => {
  return cookieString.indexOf('visited=') > -1;
};

const visitCounter = cookieName => {
  let index;
  if (document.cookie) {
    index = document.cookie.indexOf(cookieName);
  } else {
    index = -1;
  }
  if (index == -1) {
    document.cookie = cookieName + '=1; ';
  } else {
    let countbegin = document.cookie.indexOf('=', index) + 1;
    let countend = document.cookie.indexOf(';', index);
    if (countend == -1) {
      countend = document.cookie.length;
    }
    const count = eval(document.cookie.substring(countbegin, countend)) + 1;
    document.cookie = cookieName + '=' + count + ';';
    return count;
  }
};

class App extends Component {
  render() {
    const visitCount = visitCounter("visited");
    return (
      <Router>
        <Switch>
          {/* <Redirect from="/old-match" to="/will-match" /> */}
          <Route
            exact
            path="/"
            render={() => <Home visitCount={visitCount} />}
          />
          <Route path="/projects" component={Projects} />
          <Route path="/time" component={Time} />
          <Route path="/carousel" component={Carousel} />
          {/* <Route path="/topics" component={Topics} /> */}
          <Route component={Page404} />
        </Switch>
      </Router>
    );
  }
}

export default App;
