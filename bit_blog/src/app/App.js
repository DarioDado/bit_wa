import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect} from "react-router-dom"
import Header from './partials/Header';
import Footer from './partials/Footer';
import Home from './Home';
import SinglePost from './posts/SinglePost';
import Authors from './authors/Authors';
import SingleAuthor from './authors/SingleAuthor';
import About from './About';
import NewPost from './posts/NewPost';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route path='/home' component={Home} />
          <Route exact path='/posts/new' component={NewPost} />
          <Route exact path='/posts/:id' component={SinglePost} />
          <Route exact path='/authors' component={Authors} />
          <Route exact path='/authors/:id' component={SingleAuthor} />
          <Route exact path='/about' component={About} />
          <Redirect from='/' to='/home' />
        </Switch>
        <Footer />
    </Fragment>
    );
  }
}

export default App;
