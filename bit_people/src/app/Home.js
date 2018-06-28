import React, { Component, Fragment } from 'react';
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
      gridLayout: getViewMode(),
      users: [],
      loading: true
    }
  }

  loadUsers = () => {
    getUsers()
      .then(users => {
        console.log(users);
        this.setState({ users, loading: false });
        saveUsers(users);
      })
  }

  onRefreshUsersHandler = () => {
    this.setState({ loading: true }, () => {
      this.loadUsers();
      setLastUpdate();
    })
  }

  componentDidMount = () => {
    const users = getUsersFromStorage();
    if (users) {
      this.setState({ users, loading: false })
    } else {
      this.loadUsers();
    }
  }

  onLayoutChange = () => {
    const newGridLayoutState = !this.state.gridLayout;
    this.setState({gridLayout: newGridLayoutState}, () => {
      setViewMode(newGridLayoutState);
    });

  };

  render() {
    const { loading, gridLayout, users } = this.state;

    return (
      <Fragment>
        <Header
          changeLayout={this.onLayoutChange}
          gridLayout={gridLayout}
          refreshUsers={this.onRefreshUsersHandler}
          displayButtons={true}
        />
        { 
          loading
            ? <Loading />
            : <UserList
                gridLayout={gridLayout}
                users={users}
              /> 
        }
        <Footer />
      </Fragment>
    );
  }
}

export default Home;