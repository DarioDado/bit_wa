const Post = require('./entities/Post');
const loremIpsum = require('lorem-ipsum');

const createPost = () => {
    postsArr = [];
    for (let i = 0; i<10; i++) {
        let title = loremIpsum({count: 3, units: 'words', format: 'plain'});
        let body = loremIpsum({count:10, units: 'sentences', format: 'plain'});
        let post = new Post(title, body);
        postsArr.push(post);
    }
    return JSON.stringify(postsArr);
}

module.exports = {createPost};