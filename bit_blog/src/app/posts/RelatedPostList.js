import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

export const RelatedPostList = props => {
    return (
      <Fragment>
        <h4 className='blue-grey-text text-darken-1 related-posts-title'> 4 more posts from same author</h4>
        <div className="collection">
          <Link to='/posts/2'><p className="collection-item blue-grey-text text-darken-1">Title - Lorem ipsum...</p></Link>
          <Link to='/posts/1'><p className="collection-item blue-grey-text text-darken-1">Some Title - velit vulputate...</p></Link>
          <Link to='/posts/1'><p className="collection-item blue-grey-text text-darken-1">Title - tortur mauris...</p></Link>
          <Link to='/posts/1'><p className="collection-item blue-grey-text text-darken-1">Some Title - enaen velit...</p></Link>
        </div>
      </Fragment>
    )
}
