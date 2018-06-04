import React from 'react';
import './App.css';

// import UserList from "./users/UserList"
import UserCards from "./users/UserCards";
import Header from "./partials/Header"
import Footer from "./partials/Footer"
// import {data} from "../data/data"
import {getUsers} from "../services/userService.js"

const usersData = getUsers();
const App = (props) => {
  return (
    <React.Fragment>
      <Header title="React Users" />
      <UserCards data={usersData} />
      <Footer />
    </React.Fragment>
  )
}

export default App;
