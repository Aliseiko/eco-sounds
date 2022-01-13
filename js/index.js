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

// ------------- change img and mark active menu item ----------

document.querySelector('.nav__list').addEventListener('click', (event) => {
    if (event.target.closest('.nav__item')) {
        markActiveMenuItem(event.target.closest('.nav__item').dataset.bird);
        changeImg(event.target.closest('.nav__item').dataset.bird);
    }
})