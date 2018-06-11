import React from 'react';
import { PostItem } from "./PostItem";


export const PostList = props => {
    
    const {posts} = props;
    const postItems = posts.map(post => <PostItem post={post} key={post.id} />)

    return (
        <div className="container main-content post-list">
            <h1 className="center blue-grey-text text-darken-1">Posts</h1>
            <div className="row">
              {postItems}
            </div>
        </div>
    )
}
