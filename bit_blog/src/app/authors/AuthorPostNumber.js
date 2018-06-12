import React, { Component } from 'react';
import { getNumOfPostsByAuthor } from '../../services/postService';

export class AuthorPostNumber extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numOfPosts: 0,
      loading: true
    }
  }

  componentDidMount = () => {
    const { authorId } = this.props;
    getNumOfPostsByAuthor(authorId)
      .then(numOfPosts => this.setState({numOfPosts, loading: false}))
  }



  render() {
    const { loading, numOfPosts } = this.state;
    return <p className="num-of-post">Number of posts: {loading ? '...' : numOfPosts}</p>
  }
}