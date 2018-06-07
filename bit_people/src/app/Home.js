import React, { Component } from 'react';
import './Home.css';
import Header from './partials/Header';
import { getUsers, saveUsers, getUsersFromStorage, setViewMode, getViewMode, setLastUpdate } from './../services/userService';
import Footer from './partials/Footer';
import { UserList } from './users/UserList';
import Loading from './partials/Loading';

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      view: getViewMode() || "view_list",
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
        saveUsers(users);
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
      setLastUpdate();
    })
  }

  componentDidMount = () => {
    const users = getUsersFromStorage();
    if (users) {
      this.setState({users, loading: false})
    } else {
      this.loadUsers();
    }
  }

  onChangeViewHandler = (view) => {
    view = (view === "view_module") ? "view_list" : "view_module"
    setViewMode(view);
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