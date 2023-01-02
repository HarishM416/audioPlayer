const MAIN = ID("main");
const PLAY = ID("play");
const PAUSE =ID("pause");
const UNLIKE = ID("unlike");
const LIKE = ID("like")
const DOWN = ID("down-arrow");
const PLAYLIST = ID("playlist");
const PLAYLISTBOX = ID("playlist-box");
const PLAYLISTDIV = ID("playlistDiv");
let HOMEPAGE = ID("home-page");
let QUOTES = ID("quotes");

const PLAYER = document.querySelector(".player-box");
let songImg = document.querySelector(".song-img-box img");
let songName = document.querySelector(".song-name");
let singerName = document.querySelector(".singers-name");
let previousBtn = document.querySelector("#previous-btn");
let nextBtn = document.querySelector("#next-btn");
let Music = document.querySelector("#music");
let audioArea = document.querySelector(".audio-area");
let audioBar = document.querySelector(".audio-bar");
let startTime = document.querySelector(".start-time");
let endTime = document.querySelector(".end-time");
// let hi = document.querySelector(".playlist-box");

let songIndex = randomNumber(0,allSongs.length-1);
isMusicPaused = true;
let h=0;



// ONCLICK --> HIDE HOME PAGE;
QUOTES.addEventListener("click",()=>{
	hideHome();
});
function hideHome(){
	HOMEPAGE.style.display = "none";
}
// ONCLICK --> PLAY BUTTON;
PLAY.addEventListener("click",()=>{
	playButton();
});
function playButton(){
	PLAY.style.display = "none";
	PAUSE.style.display = "block";
	Music.play();
	h=5;
}
// ONCLICK --> PAUSE BUTTON;
PAUSE.addEventListener("click",()=>{
	pauseButton();
});
function pauseButton(){
	PLAY.style.display = "block";
	PAUSE.style.display = "none";
	Music.pause();	
	h=6;
}
//ONCLICK --> Like Button;
UNLIKE.addEventListener("click",()=>{
	UNLIKE.style.display = "none";
	LIKE.style.display = "block";
});
LIKE.addEventListener("click",()=>{
	UNLIKE.style.display = "block";
	LIKE.style.display = "none";
});
//ONCLICK --> SHOW PLAYLIST; 
PLAYLIST.addEventListener("click",()=>{
	PLAYLISTBOX.style.top = "0";
});
//ONCLICK --> HIDE PLAYLIST;
DOWN.addEventListener("click",()=>{
	PLAYLISTBOX.style.top = "100%";
});
// 
window.addEventListener("load",()=>{
	loadMusic(songIndex);
	playsong();
});
function loadMusic(i){
	songName.innerText = allSongs[i].name;
	singerName.innerText = allSongs[i].artist;
	songImg.src = `images/${allSongs[i].img}`;
	Music.src = `songs/${allSongs[i].src}`;
}
// ONCLICK --> PREVIOUS SONG;
previousBtn.addEventListener("click",()=>{
	previousSong();
});

function previousSong(){
	songIndex--;
	songIndex < 0 ? songIndex = allSongs.length-1 : songIndex = songIndex;
	loadMusic(songIndex);
	playButton();
	playsong();
}
// ONCLICK --> NEXT SONG;
nextBtn.addEventListener("click",()=>{
	nextSong();
});
function nextSong(){
	songIndex++;
	songIndex > allSongs.length -1 ? songIndex = 0 : songIndex = songIndex;
	loadMusic(songIndex);
	playButton();
	playsong();
}
// TIME UPDATE;
Music.addEventListener("timeupdate",(t)=>{
	const currentTime = t.target.currentTime;
	const duration = t.target.duration;
	let wid = (currentTime / duration) * 100;
	audioBar.style.width = `${wid}%`;
	Music.addEventListener("loadeddata",()=>{
		let audioDuration = Music.duration;
		console.log(audioDuration);
		let endMin = Math.floor(audioDuration / 60);
		let endSec = Math.floor(audioDuration % 60);
		if(endSec < 10){
			endSec = `0${endSec}`;
		}
		endTime.innerText = `${endMin}:${endSec}`;
	});
	let startMin = Math.floor(currentTime / 60);
	let startSec = Math.floor(currentTime % 60);
	if(startSec < 10){
			startSec = `0${startSec}`;
		}
	startTime.innerText = `${startMin}:${startSec}`;
});

// CLICK TO CHANGE TIME OF THE SONG;
audioArea.addEventListener("click", (s)=>{
	let areaWid = audioArea.clientWidth;
	let getOffset = s.offsetX;
	let songDuration = Music.duration;
	Music.currentTime = (getOffset / areaWid) * songDuration;
	playsong();
	h==5 ? playButton() : pauseButton();
});
// AFTER SONG ENDED;
Music.addEventListener("ended",()=>{
	nextSong();
});
// Playlist song div;
for (let i = 0; i < allSongs.length; i++) {
	let songsDiv = `<div class="${i}" id="playlistMusic" onclick=clicked(this)>
						<div class="hi">
							<h3>${allSongs[i].name}</h3>
							<p>${allSongs[i].artist}</p>
						</div>
						<p id="time">3:56</p>
						<audio class="music-list" src="songs/${allSongs[i].src}"></audio>
					</div>`;
	PLAYLISTDIV.innerHTML += songsDiv;
	let timeDuration = document.querySelector("#time");
	let musicList = document.querySelector(".music-list");
  	musicList.addEventListener("loadeddata", ()=>{
	let duration = musicList.duration;
    let totalMin = Math.floor(duration / 60);
    let totalSec = Math.floor(duration % 60);
    if(totalSec < 10){
      	totalSec = `0${totalSec}`;
	};
    timeDuration.innerText = `${totalMin}:${totalSec}`;
    // timeDuration.setAttribute("t-duration", `${totalMin}:${totalSec}`);
	});
}

let playlistMusic = document.querySelector("#playlistMusic");
let musicName = ID("musicName");
let musicSinger = ID("musicsinger");
function playsong(){
	musicName.innerText = `${allSongs[songIndex].name}`;
	musicsinger.innerText = `${allSongs[songIndex].artist}`;
}
function clicked(a){
	let getIndex = a.className;
	songIndex = getIndex;
	loadMusic(songIndex);
	playButton();
	playsong();
}