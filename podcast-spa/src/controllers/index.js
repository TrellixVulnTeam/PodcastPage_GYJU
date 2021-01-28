import Home from './home.controller'
import Posts from './posts.controller'
import notFound from './notFound.controller'
import Linktree from './linktree.controller'
import Post1 from './post#1.controller'

const pages = {
    home: Home,
    posts: Posts,
    linktree: Linktree,
    notFound: notFound,
    post1: Post1,
};

export { pages }