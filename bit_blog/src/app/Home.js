import React, { Component, Fragment } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';


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
        <main></main>
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
