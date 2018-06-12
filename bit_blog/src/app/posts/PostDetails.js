import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { createHashHistory } from 'history';
import { AuthorName } from '../authors/AuthorName';
import { deletePost } from '../../services/postService';
import './PostDetails.css';

export class PostDetails extends Component {
  constructor(props) {
    super(props)
  }

  onDeletePostHandler = (e) => {
    e.preventDefault();
    const history = createHashHistory();
    const { post } = this.props;
    deletePost(post.id)
        .then(() => {
          history.push('/home');
        })
  }

  render() {
    const { post } = this.props;
    return (
      <Fragment>
        <Link to='/home'><p className='back-link'>Back</p></Link>
        <div className="col s12 center">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{post.title}</span>
              <AuthorName authorId={post.userId} />
              <p>{post.body}</p>
            </div>
            <div className="card-action">
              <a onClick={this.onDeletePostHandler}>Delete Post</a>
              <Link to="">
                <span>Update Post</span>
              </Link>
            </div>
          </div>
        </div>
      </Fragment>
    )

  }
}
