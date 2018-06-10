import React from 'react';
import { Link } from "react-router-dom";
import "./PostItem.css";

export const PostItem = props => {
    return (
      <div className="col s12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <Link to='/posts/1'>
              <span className="card-title">Card Title</span>
            </Link>
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
          </div>
        </div>
      </div>
    )
}
