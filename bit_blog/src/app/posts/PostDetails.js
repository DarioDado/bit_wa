import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import './PostDetails.css';

export const PostDetails = props => {
    return (
      <Fragment>
        <Link to='/home'><p className='back-link'>Back</p></Link>
        <div className="col s12 center">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <Link to='/authors/1'><p id="author-name">Author Name</p></Link>
              <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>
        </div>
      </Fragment>
    )
}
