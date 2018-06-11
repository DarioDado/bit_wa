import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { AuthorName } from '../authors/AuthorName';
import './PostDetails.css';

export const PostDetails = props => {
  const { post } = props
  return (
    <Fragment>
      <Link to='/home'><p className='back-link'>Back</p></Link>
      <div className="col s12 center">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{post.title}</span>
              <AuthorName authorId = {post.userId}/>
            <p>{post.body}</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
