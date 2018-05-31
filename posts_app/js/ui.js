const DOMSelectors = {
    divContainer: ".container"
}

const $container = $(DOMSelectors.divContainer);

export const displayPosts = postsList => {
    postsList.forEach(({title, body}) => {
        let $post = $(
            `<div class="post">
                <h2 class="title">${title}</h2>
                <p class="body">${body}</p>
            </div>`);
        $container.append($post);
    });
}