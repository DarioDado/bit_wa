import React, { Component, Fragment } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import { PostList } from './posts/PostList';


class Home extends Component {

  constructor(props) {
    super(props)
  }



  componentDidMount = () => {

  }



  render() {

    return (
      <Fragment>
        <Header />
        <main>
          <PostList />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
