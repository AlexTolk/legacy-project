function CapitalizeTitles(posts) {
    return posts.map(post => ({
        ...post,
        title: post.title.toUpperCase()
    }));
}

module.exports = CapitalizeTitles;