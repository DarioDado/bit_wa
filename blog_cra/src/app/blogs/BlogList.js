import React from "react";
import Blog from "./Blog";

const BlogList = (props) => {
    const Blogs = props.list.map((blog) =>
        (<Blog blog={blog} key={blog.id} />))
    return (
        <div className="container">
            <div className="row">
                {Blogs}
            </div>
        </div>

    )
}

export default BlogList;