import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import { getUsers } from './../services/userService';
import Footer from './partials/Footer';
import { UserList } from './users/UserList';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      view: "view_module",
      users: []
    }
  }

  loadUsers = () => {
    getUsers()
      .then(users => {
        this.setState({ users });
      })
  }

  onRefreshUsersHandler = () => {
    this.loadUsers();
  }

  componentDidMount = () => {
    this.loadUsers();
  }

  onChangeViewHandler = (view) => {
    view = (view === "view_module") ? "view_list" : "view_module"
    this.setState({ view })
  }

  render() {
    return (
      <React.Fragment>
        <Header
          changeView={this.onChangeViewHandler}
          view={this.state.view}
          refreshUsers={this.onRefreshUsersHandler}
        />
        <UserList view={this.state.view} users={this.state.users} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
