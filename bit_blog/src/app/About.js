import React, { Component } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import AboutContent from './partials/AboutContent';


class About extends Component {
  render() {
    return (
        <React.Fragment>
            <Header />
            <main>
              <AboutContent />
            </main>
            <Footer />
        </React.Fragment>
    )
  }
}

export default About;
