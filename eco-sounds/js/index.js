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
    '\n' +
    '1. Вёрстка +10\n' +
    '        есть не меньше пяти интерактивных элементов, с которыми пользователи могут взаимодействовать. Изменение внешнего вида самого элемента и состояния курсора при наведении, плавные анимации +5\n' +
    '        в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n' +
    '2. При кликах по интерактивным элементам меняется изображение +10\n' +
    '3. При кликах по интерактивным элементам меняется звук +10\n' +
    '4. Активный в данный момент интерактивный элемент выделяется стилем +10\n' +
    '5. Кнопка Play/Pause +20\n' +
    '        есть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание звука +10\n' +
    '        внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент звук +10\n' +
    '6. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10\n' +
    '        плавная смена картинок, кнопка скачать звук\n' +
    '\nИтого: 70 баллов')