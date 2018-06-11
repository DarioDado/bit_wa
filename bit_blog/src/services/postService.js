import { getData } from './fetchService';
import { endPoints } from '../shared/constants';
import { Post } from '../entities/Post';

export const getPosts = () => {
    return getData(endPoints.getPosts)
        .then(postsData => {
            return postsData.map(post => {
                return new Post (post.id, post.userId, post.title, post.body);
            });
        });
}

export const getSinglePost = (id) => {
    const endPoint = `${endPoints.getPosts}/${id}`;
    return getData(endPoint)
        .then(postData => {
            const {id, userId, title, body} = postData;
            return new Post(id, userId, title, body);
        })
}

export const getRelatedPosts = (authorID, postId) => {
    const endPoint = `${endPoints.getPosts}?userId=${authorID}`;
    return getData(endPoint)
        .then(postsData => {
            return postsData.map(post => {
                return new Post (post.id, post.userId, post.title, post.body);
            })
        })
        .then(posts => {
            return posts.filter(post => {
                return post.id !== parseInt(postId, 10);
            })
        });
}