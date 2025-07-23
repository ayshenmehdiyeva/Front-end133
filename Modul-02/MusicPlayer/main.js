const shuffleButton = document.getElementById("shuffle")
const prevButton = document.getElementById("prev")
const playButton = document.getElementById("play")
const pauseButton = document.getElementById("pause")
const nextButton = document.getElementById("next")
const repeatButton = document.getElementById("repeat")
const songImage = document.getElementById("song-image");
const songName = document.getElementById("song-name");
const audio = document.getElementById("audio");
const songArtist = document.getElementById("song-artist");
const playlistButton = document.getElementById("playlist");
const maxDuration = document.getElementById("max-duration");
const currentTimeRef = document.getElementById("current-time");
const progressBar = document.getElementById("progress-bar");
const playlistContainer = document.getElementById("playlist-container");
const closeButton = document.getElementById("close-button");
const playlistSongs = document.getElementById("playlist-songs");
const currentProgress = document.getElementById("current-progress");

const songsList = [
    {
        name: "BIRTHDAY",
        link: "BIRTHDAY.mp3",
        artist: "ANNE MARIE",
        image: "Birthday - Anne Marie.jpg",
    },
    {
        name: "ANOTHER LOVE",
        link: "another-love.mp3",
        artist: "TOM ODELL",
        image: "Another love - Tom Odell.jpg",
    },
    {
        name: "Diamonds",
        link: "Diamonds.mp3",
        artist: "Rihanna",
        image: "Diomands - Rihanna.jpg",
    },
    {
        name: "Wanna be yours",
        link: "i-wanna-be-yours.mp3",
        artist: "Aydin",
        image: "I wanna be yours - Arctic Monkeys.jpg",
    },
    {
        name: "Money",
        link: "Money.mp3",
        artist: "Ayshen",
        image: "Money - Lalisa.jpg",
    }
];

playButton.addEventListener("click", function () {

    audio.play()
    pauseButton.classList.remove("hide");
    playButton.classList.add("hide");

})
pauseButton.addEventListener("click", function () {
    audio.pause()
    playButton.classList.remove("hide");
    pauseButton.classList.add("hide");

})

let num = 0;

nextButton.addEventListener("click", () => {
    if (num === 4) {
        num = -1
    }
    num++
    console.log(songsList[num])
    console.log("sra nomresi " + num)
    render(songsList[num])
})

prevButton.addEventListener("click", () => {
    if (num === 0) {
        num = 5
    }
    num--;
    console.log(songsList[num])
    console.log("sra nomresi " + num)
    render(songsList[num])
})

function render(param) {
    songImage.src = `./images/${param.image}`;
    songName.innerText = `${param.name}`;
    songArtist.innerText = `${param.artist}`;
    audio.src = `./audio/${param.link}`;
    audio.play();
    pauseButton.classList.remove("hide")
    playButton.classList.add("hide")
}