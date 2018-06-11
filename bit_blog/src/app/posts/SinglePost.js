import React, { Component, Fragment } from "react";
import { PostDetails } from "./PostDetails";
import { RelatedPostList } from "./RelatedPostList";
import { getSinglePost } from "../../services/postService";

class SinglePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: null,
      loading: true
    }
  }
  componentDidMount = () => {
    const postId = this.props.match.params.id;
    getSinglePost(postId)
    .then(post => {
      this.setState({post, loading: false})
    })
  }

  componentWillReceiveProps = (nextProps) => {
    const postId = nextProps.match.params.id;
    getSinglePost(postId)
    .then(post => {
      this.setState({post, loading: false})
    })
  }

  renderMainContent = () => {
    const {loading, post} = this.state;
    if (loading) {
      return <div className='loading'></div>
    } else {
      return <main className='container'>
                <PostDetails post={post} />
                <RelatedPostList post={post}/>
              </main>
    }
  }

  render() {
    return (
      <Fragment>
          {this.renderMainContent()}
      </Fragment>

    )
  }
}


export default SinglePost;
