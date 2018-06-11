import { getData, postData } from './fetchService';
import { endPoints } from '../shared/constants';
import { Post } from '../entities/Post';

export const getPosts = () => {
    const url = endPoints.getPosts;
    return getData(url)
        .then(postsData => {
            return postsData.map(post => {
                return new Post (post.id, post.userId, post.title, post.body);
            });
        });
}

export const getSinglePost = (id) => {
    const url = `${endPoints.getPosts}/${id}`;
    return getData(url)
        .then(postData => {
            const {id, userId, title, body} = postData;
            return new Post(id, userId, title, body);
        })
}

export const getRelatedPosts = (authorID, postId) => {
    const url = `${endPoints.getPosts}?userId=${authorID}`;
    return getData(url)
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

export const savePost = (data) => {
  const url = endPoints.postPost;
  return postData(url, data)
    .then(createdPostData => {
      return createdPostData;
    })
}
