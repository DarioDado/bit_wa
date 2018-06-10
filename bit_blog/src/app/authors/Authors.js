import React, { Fragment } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { AuthorList } from "./AuthorList";

const Authors = (props) => {
    return (
      <Fragment>
      <Header />
      <main className='container'>
        <AuthorList />
      </main>
      <Footer />
      </Fragment>
    )
}


export default Authors;
