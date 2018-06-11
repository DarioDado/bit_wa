import React from 'react';
import { PostItem } from "./PostItem";


export class PostList extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {

        return (
            <div className="container main-content post-list">
                <h1 className="center blue-grey-text text-darken-1">Posts</h1>
                <div className="row">
                  <PostItem />
                  <PostItem />
                  <PostItem />
                  <PostItem />
                </div>
            </div>
        )

    }
}
