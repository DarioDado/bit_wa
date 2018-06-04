import React from 'react';

import BlogList from "./blogs/BlogList"
import Header from "./partials/Header"
import Footer from "./partials/Footer"
import {data} from "../data/data"


const App = (props) => {
  return (
    <React.Fragment>
      <Header title="My React Blog" />
      <BlogList list={data} />
      <Footer />
    </React.Fragment>
  )
}

export default App;
