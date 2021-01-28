import views from '../views/post#1.html'

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = views;

    return divElement;
};