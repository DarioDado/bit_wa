import React from 'react';
import { Link } from "react-router-dom";

export const AuthorItem = props => {
    const { author } = props;
    return (
      <div className="col s12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <Link to={`/authors/${author.id}`}>
              <span className="card-title author-name">{author.name}</span>
            </Link>
          </div>
        </div>
      </div>
    )
}
