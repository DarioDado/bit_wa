import React, { Fragment } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { PostDetails } from "./PostDetails";
import { RelatedPostList } from "./RelatedPostList";

const SinglePost = (props) => {
    return (
      <Fragment>
      <Header />
      <main className='container'>
        <PostDetails />
        <RelatedPostList />
      </main>
      <Footer />
      </Fragment>
    )
}


export default SinglePost;
