const audio = document.querySelector('audio'),
    playButton = document.querySelector('.player__play-pause-button'),
    downloadButton = document.querySelector('.player__download-button');
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
        if (isPlay) playAudio();
        setDownloadLink(currentBird);
    }
})

// -------------- audio-player ---------------------------------

function playAudio() {
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
}

function pauseAudio() {
    audio.pause();
    isPlay = false;
}

function setAudioSrc(bird) {
    audio.src = `assets/audio/${bird}.mp3`;
}

function setActivePlayButton() {
    Array.from(document.querySelectorAll(`.player__play-pause-button-img`)).find(elem => elem.classList.contains('active-button')).classList.remove('active-button');
    document.querySelector(`.${(isPlay) ? 'pause-button' : 'play-button'}`).classList.add('active-button');
}

playButton.addEventListener('click', (event) => {
    if (event.target.closest('.player__play-pause-button')) {
        (isPlay) ? pauseAudio() : playAudio();
        setActivePlayButton();
    }
})

// ----------------- download sound -----------------------

function setDownloadLink(bird) {
    document.querySelector('.download-link').href = `assets/audio/${bird}.mp3`;
}