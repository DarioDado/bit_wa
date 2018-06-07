import React, { Component } from 'react';
import './Home.css';
import Header from './partials/Header';
import { getUsers } from './../services/userService';
import Footer from './partials/Footer';
import { UserList } from './users/UserList';
import Loading from './partials/Loading';

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      view: window.localStorage.getItem('view') || "view_list",
      users: [],
      filteredUsers: [],
      noFilterResults: false,
      loading: true
    }
  }

  loadUsers = () => {
    getUsers()
      .then(users => {
        this.setState({ users, loading: false });
      })
  }

  onChangeSearchInputHandler = (value) => {
    const filteredUsers = this.state.users.filter((user) => {
      return user.getFullName().toLowerCase().includes(value.toLowerCase());
    })
    if (filteredUsers.length === 0) {
      this.setState({
        noFilterResults: true
      })
    } else {
      this.setState({
        noFilterResults: false,
        filteredUsers: filteredUsers
      });
    }

  }

  onRefreshUsersHandler = () => {
    this.setState({loading: true}, ()=>{
      this.loadUsers();
    })
  }

  componentDidMount = () => {
    this.loadUsers();
  }

  onChangeViewHandler = (view) => {
    view = (view === "view_module") ? "view_list" : "view_module"
    window.localStorage.setItem('view', view);
    this.setState({ view })
  }

  render() {
    if (this.state.loading) {
      return (
        <React.Fragment>
          <Header
            changeView={this.onChangeViewHandler}
            view={this.state.view}
            refreshUsers={this.onRefreshUsersHandler}
            displayButtons={true}
          />
          <Loading />
          <Footer />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Header
            changeView={this.onChangeViewHandler}
            view={this.state.view}
            refreshUsers={this.onRefreshUsersHandler}
            displayButtons={true}
          />
          <UserList 
            view={this.state.view} 
            users={this.state.users}
            filteredUsers={this.state.filteredUsers}
            filterUsers={this.onChangeSearchInputHandler}
            noFilterResults={this.state.noFilterResults} 
          />
          <Footer />
        </React.Fragment>
      );

    }
  }
}

export default Home;