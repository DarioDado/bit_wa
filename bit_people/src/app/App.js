import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import { UserList } from './users/UserList';



class App extends Component {
  state = {
    view: "view_module"
  }

  changeView = (view) => {
    view === "view_module" 
    ? this.setState({view: "view_list"}) 
    : this.setState({view: "view_module"})
    // if (view === "view_module") {
    //   this.setState({
    //     view: "view_list"
    //   })
    // } else if (view === "view_list") {
    //   this.setS
    // }
  }

  render() {
    return (
      <React.Fragment>
        <Header changeView = {this.changeView} view = {this.state.view} />
        <UserList view={this.state.view} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
