import React from 'react';
import { Link } from "react-router-dom";
import { AuthorPostNumber } from './AuthorPostNumber';

export const AuthorItem = (props) => {
  
  const { author } = props;
  return (
    <div className="col s12">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <Link to={`/authors/${author.id}`}>
            <p className="card-title author-name">{author.name}</p>
          </Link>
          <AuthorPostNumber authorId={author.id} />
        </div>
      </div>
    </div>
  )
}

