import React, { Fragment } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { CreatePostForm } from "./CreatePostForm";

const NewPost = (props) => {
  // props.history.push('/');
    return (
      <Fragment>
      <Header />
      <main className='container'>
        <CreatePostForm />
      </main>
      <Footer />
      </Fragment>
    )
}


export default NewPost;