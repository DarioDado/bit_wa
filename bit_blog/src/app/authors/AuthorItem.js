import React from 'react';
import { Link } from "react-router-dom";

export const AuthorItem = props => {
    return (
      <div className="col s12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <Link to='/author/1'>
              <span className="card-title">Name Surname</span>
            </Link>
          </div>
        </div>
      </div>
    )
}
