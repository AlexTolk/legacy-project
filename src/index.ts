import { filter } from "lodash";
import { IPost, getPosts } from "./Posts";
import capitalizeTitles from "./LegacyModule";

(async function filterPosts() {
    const userId: number = 1;
    const posts = await getPosts();

    console.log('Total posts: ', posts.length)

    const filteredPosts: IPost[] = filter(posts, (p: IPost) => p.userId === userId);

    console.log('Filtered posts: ', filteredPosts.length);

    const capitalizedPosts = capitalizeTitles(filteredPosts);

    console.log('Capitalized Posts: ', capitalizedPosts)
})();
