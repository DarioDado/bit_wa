import Post from './entities/Post.js';

export const fetchPosts = () => {
    return fetch('http://127.0.0.1:3000/')
        .then(data => {
            return data.json();
        })
        .then((postsData) => {
            const postsList = postsData.map(({title, body})=> {
                return new Post(title, body);
            })
            return postsList;
        })
}