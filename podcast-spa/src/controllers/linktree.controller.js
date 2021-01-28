import views from '../views/linktree.html'

export default () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = views;

    return divElement;
};