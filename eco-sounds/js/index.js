const audio = document.querySelector('audio'),
    playButton = document.querySelector('.player__play-pause-button');
let isPlay = false;


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
        const currentBird = event.target.closest('.nav__item').dataset.bird;
        markActiveMenuItem(currentBird);
        setAudioSrc(currentBird);
        changeImg(currentBird);
        playAudio();
        setDownloadLink(currentBird);
    }
})

// -------------- audio-player ---------------------------------

function playAudio() {
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
    setActivePlayButton();
}

function pauseAudio() {
    audio.pause();
    isPlay = false;
    setActivePlayButton();
}

function setAudioSrc(bird) {
    audio.src = `assets/audio/${bird}.mp3`;
}

function setActivePlayButton() {
    Array.from(document.querySelectorAll(`.player__play-pause-button-img`)).find(elem => elem.classList.contains('active-button')).classList.remove('active-button');
    document.querySelector(`.${(isPlay) ? 'pause-button' : 'play-button'}`).classList.add('active-button');
}

playButton.onclick = function () {
    (isPlay) ? pauseAudio() : playAudio();
}

// ----------------- download sound -----------------------

function setDownloadLink(bird) {
    document.querySelector('.download-link').href = `assets/audio/${bird}.mp3`;
}

// ----------------- work self-assessment -----------------

console.log('Самооценка:\n' +
    '1. Вёрстка, дизайн, UI +20\n' +
    '        внешний вид приложения соответствует предложенному образцу или является его улучшенной версией +5\n' +
    '        вёрстка адаптивная. Отсутствует горизонтальная полоса прокрутки при ширине страницы от 1920рх до 768рх +5\n' +
    '        интерактивность элементов, с которыми пользователи могут взаимодействовать, изменение внешнего вида самого элемента и состояния курсора при наведении, использование разных стилей для активного и неактивного состояния элемента, плавные анимации +5\n' +
    '        в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n' +
    '2. При кликах по названиям птиц в навигации меняется фоновое изображение +10\n' +
    '        при кликах по названиях птиц меняется изображение +5\n' +
    '        изменение изображения происходит плавно, изображение сначала загружается, потом отображается, нет ситуаций, когда пользователь видит частично загрузившиеся изображение +5\n' +
    '3. При кликах по названиям птиц в навигации проигрываются голоса этих птиц +10\n' +
    '4. Название птицы, голос которой в данный момент проигрывается, выделяется стилем +10\n' +
    '5. Кнопка Play/Pause +10\n' +
    '        есть кнопка Play/Pause при клике по которой можно запустить или остановить проигрывание звука +5\n' +
    '        внешний вид и функционал кнопки изменяется в зависимости от того, проигрывается ли в данный момент звук +5\n' +
    '6. Есть кнопка Download при клике по которой можно скачать аудиофайл с голосом птицы +5\n' +
    '\nИтого: 65 баллов')