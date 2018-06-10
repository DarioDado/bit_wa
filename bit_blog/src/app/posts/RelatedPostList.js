import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

export const RelatedPostList = props => {
    return (
      <Fragment>
        <h4 className='blue-grey-text text-darken-1 related-posts-title'> 4 more posts from same author</h4>
        <div class="collection">
          <Link to='/posts/2'><a href="#!" class="collection-item blue-grey-text text-darken-1">Title - Lorem ipsum...</a></Link>
          <Link to='/posts/1'><a href="#!" class="collection-item blue-grey-text text-darken-1">Some Title - velit vulputate...</a></Link>
          <Link to='/posts/1'><a href="#!" class="collection-item blue-grey-text text-darken-1">Title - tortur mauris...</a></Link>
          <Link to='/posts/1'><a href="#!" class="collection-item blue-grey-text text-darken-1">Some Title - enaen velit...</a></Link>
        </div>
      </Fragment>
    )
}
