import React from 'react';
import { Link } from "react-router-dom";
import "./PostItem.css";

export const PostItem = props => {
    const {post} = props;
    return (
      <div className="col s12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <Link to={`/posts/${post.id}`}>
              <span className="card-title title">{post.title}</span>
            </Link>
            <p>{post.body}</p>
          </div>
        </div>
      </div>
    )
}
