import React, { Component } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import AboutContent from './partials/AboutContent';


class About extends Component {
  render() {
    return (
        <React.Fragment>
            <Header displayButtons={false}/>
            <AboutContent />
            <Footer />
        </React.Fragment>
    )
  }
}

export default About;