import React, { Fragment, Component } from 'react';
import { Link } from "react-router-dom";
import { getRelatedPosts } from '../../services/postService';

export class RelatedPostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      relatedPosts: [],
      loading: true
    }
  }

  componentWillReceiveProps = (nextProps) => {
    const { post } = nextProps;
    getRelatedPosts(post.userId, post.id)
      .then(relatedPosts => {
        this.setState({relatedPosts, loading: false})
      })
  }

  componentDidMount = () => {
    const { post } = this.props;
    getRelatedPosts(post.userId, post.id)
      .then(relatedPosts => {
        this.setState({relatedPosts, loading: false})
      })
  }

  renderRelatedPosts = relatedPosts => {
    return relatedPosts.map(relatedPost => {
      return <Link to={`/posts/${relatedPost.id}`} key={relatedPost.id}>
                <p className="collection-item blue-grey-text text-darken-1">{relatedPost.title} - {relatedPost.trimBody()}</p>
            </Link>
      })
  }

  renderNumOfRelPostsMsg = () => {
    const {relatedPosts, loading} = this.state;
    if (loading) {
      return <p>...</p>
    } else if (relatedPosts.length === 0) {
      return null
    } else {
      return <h4 className='blue-grey-text text-darken-1 related-posts-title'>
               {relatedPosts.length} {(relatedPosts.length === 1) ? "more post" : "more posts" } from same author
              </h4>
    }
  }

  render() {
    const {relatedPosts, loading} = this.state;
    const relatedPostLinks = loading
      ? <div className='loading'></div>
      : this.renderRelatedPosts(relatedPosts);


    return (
      <Fragment>
        {this.renderNumOfRelPostsMsg()}
        <div className="collection">
          {relatedPostLinks}
        </div>
      </Fragment>
    )
  }
}
