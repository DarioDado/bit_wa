import React, { Fragment } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { AuthorDetails } from "./AuthorDetails";

const SingleAuthor = (props) => {
    return (
      <Fragment>
      <Header />
      <main className='container'>
        <AuthorDetails />
      </main>
      <Footer />
      </Fragment>
    )
}


export default SingleAuthor;
