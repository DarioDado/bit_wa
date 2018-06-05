import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import { UserList } from './users/UserList';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <UserList />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
