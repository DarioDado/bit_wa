import React, { Component } from 'react';
import { PostList } from './posts/PostList';
import { getPosts } from '../services/postService';


class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }



  componentDidMount = () => {
    getPosts()
      .then(posts => {
        this.setState({posts});
      })
  }



  render() {

    const {posts} = this.state;

    return (
        <main>
          <PostList posts={posts}/>
        </main>
    );
  }
}

export default Home;
