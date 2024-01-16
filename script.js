const video = document.querySelector('video')
const progressRange = document.querySelector('.progress-range')
const progressBar = document.querySelector('.progress-bar')
const playBtn = document.getElementById('play-btn')
const volumeIcon = document.getElementById('volume-icon')
const volumeRange = document.querySelector('volume-range')
const volumeBar = document.querySelector('.volume-bar')
const currentTime = document.querySelector('.time-elapsed')
const duration = document.querySelector('.time-duration')
const fullscreenBtn = document.querySelector('fullscreen')



// Play & Pause ----------------------------------- //

function showPlayIcon() {
    playBtn.classList.replace('fa-pause', 'fa-play')
    playBtn.title = 'Play'
}

function togglePlay() {
    if (video.paused) {
        video.play()
        playBtn.classList.replace('fa-play', 'fa-pause')
        playBtn.title = 'Pause'
    } else {
        video.pause()
        playBtn.classList.replace('fa-pause', 'fa-play')
        playBtn.title = 'Play'
    }
}

video.addEventListener('ended', showPlayIcon)

// Progress Bar ---------------------------------- //

function displayTime(time) {
    const minutes = Math.floor(time / 60)
    let seconds = Math.floor(time % 60)
    seconds = seconds<10? seconds = `0${seconds}`: seconds
    return `${minutes}:${seconds}`
}

function updateProgress() {
    playBtn.classList.replace('fa-play', 'fa-pause')
    playBtn.title = 'Pause'
    progressBar.style.width = `${video.currentTime/video.duration * 100}%`
    displayTime(video.duration)
    currentTime.textContent = `${displayTime(video.currentTime)} / `
    duration.textContent = `${displayTime(video.duration)}`
}

function setProgress(e) {
    const newTime = e.offsetX / progressRange.offsetWidth 
    progressBar.style.width = `${newTime * 100}%`
    video.currentTime = newTime * video.duration
}

// Volume Controls --------------------------- //



// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //



playBtn.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay)
video.addEventListener('timeupdate', updateProgress)
video.addEventListener('canplay', showPlayIcon)
progressRange.addEventListener('click', setProgress)

