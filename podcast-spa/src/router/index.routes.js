import {pages} from '../controllers/index'

let content = document.getElementById('root');


const router = (route) => {
    content.innerHTML = '';
    switch(route) {
        case '#/':
            return content.appendChild(pages.home())
        case '#/posts':
            return content.appendChild(pages.posts())
        case '#/linktree':
            return content.appendChild(pages.linktree())
        case '#/posts/1':
            return content.appendChild(pages.post1())
        default:
            return content.appendChild(pages.notFound())
    }
}

export {router}