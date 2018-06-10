import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import Home from './Home';
import SinglePost from './posts/SinglePost';
import Authors from './authors/Authors';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/home' component={Home} />
        <Route exact path='/posts/:id' component={SinglePost} />
        <Route exact path='/authors' component={Authors} />
        <Redirect from='/' to='/home' />
      </Switch>
    );
  }
}

export default App;
