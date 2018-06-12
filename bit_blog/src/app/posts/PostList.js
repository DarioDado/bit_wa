import React from 'react';
import { Link } from "react-router-dom";
import { PostItem } from "./PostItem";


export const PostList = props => {
    
    const {posts} = props;
    const postItems = posts.map(post => <PostItem post={post} key={post.id} />)

    return (
        <div className="container main-content post-list">
            <h1 className="center blue-grey-text text-darken-1">Posts</h1>
            <Link to="/posts/new"><button className="waves-effect waves-light btn">Create Post</button></Link>
            <div className="row">
              {postItems}
            </div>
        </div>
    )
}
