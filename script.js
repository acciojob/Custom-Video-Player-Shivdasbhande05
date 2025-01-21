/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

let isPlaying = false;

function playButton () {
    if(isPlaying){
        video.pause();
        toggle.textContent ="►";
    } else {
        video.play();
        toggle.textContent ="❚❚";
    }

    isPlaying = !isPlaying;
}

function volume() {
    video.volume = ranges[0].value;
}

function playbackSpeed () {
    video.playbackrate = ranges[1].value;
}

toggle.addEventListener("click" , playButton);
ranges[0].addEventListener("input" , volume);
ranges[1].addEventListener("input", playbackSpeed);

skipButtons.forEach(button => {
    button.addEventListener("click" , () =>{
        video.currentTime = button.getAttribute("data-skip");
    });
})
