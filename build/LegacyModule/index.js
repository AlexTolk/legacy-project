"use strict";
function CapitalizeTitles(posts) {
    return posts.map(post => (Object.assign(Object.assign({}, post), { title: post.title.toUpperCase() })));
}
module.exports = CapitalizeTitles;
