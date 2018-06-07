import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import Home from './Home';
import About from './About';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Redirect from='/' to='/home' />
      </Switch>
    )
  }
}

export default App;
