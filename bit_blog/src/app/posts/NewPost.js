import React from "react";
import { CreatePostForm } from "./CreatePostForm";

const NewPost = (props) => {
  // props.history.push('/');
    return (
      <main className='container'>
        <CreatePostForm />
      </main>
    )
}


export default NewPost;
