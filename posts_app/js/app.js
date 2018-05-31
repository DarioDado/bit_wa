import * as data from './data.js';
import * as ui from './ui.js';

export const initHomepage = () => {
    data.fetchPosts()
    .then(postsList => {
        ui.displayPosts(postsList);
    })
    .catch(() => {
        ui.diplayError('Network Problem!');
    })
}