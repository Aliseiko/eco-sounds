function removeActiveClass(fromClass) {
    Array.from(document.querySelectorAll(`.${fromClass}`)).find(elem => elem.classList.contains('active')).classList.remove('active');
}

function addActiveClass(bird) {
    document.querySelector(`[data-bird="${bird}"]`).classList.add('active');
}

function markActiveMenuItem(bird) {
    removeActiveClass('nav__item');
    addActiveClass(bird);
}

function changeImg(bird) {
    removeActiveClass('main__image');
    addActiveClass(bird + '-img');
}

document.querySelector('.nav__list').addEventListener('click', (event) => {
    if (event.target.classList.contains('menu__item')) {
        markActiveMenuItem(event.target.dataset.bird);
        changeImg(event.target.dataset.bird);
    }
})