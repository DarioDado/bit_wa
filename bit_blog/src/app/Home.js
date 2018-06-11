import React, { Component, Fragment } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
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
      <Fragment>
        <Header />
        <main>
          <PostList posts={posts}/>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
