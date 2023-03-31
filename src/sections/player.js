import { formatTimestamp } from '../lib/timestamp'
import { songListVis } from './generation'

let songList = []
let currentSong = null

const audioPlayer = document.querySelector('#audio-player')

const playerSongTitle = document.querySelector('#player-infos-song-title')
const playerArtistName = document.querySelector('#player-infos-artist-name')
const cover = document.querySelector('.cover')

const playerPrev = document.querySelector('#player-control-previous')
const playerPlay = document.querySelector('#player-control-play')
const playerPlayIcon = document.querySelector('#player-control-play .material-icons')
const playerNext = document.querySelector('#player-control-next')

const playerTimeCurrent = document.querySelector('#player-time-current')
const playerTimeDuration = document.querySelector('#player-time-duration')
const playerProgress = document.querySelector('#player-progress-bar')

const songListContainer = document.querySelector('.songs')


const playFunc = (song, songs) => {
  currentSong = song
  playerPlayIcon.classList.remove('material-icons-pause')
    audioPlayer.src = currentSong.url
    audioPlayer.play()

    songListContainer.replaceChildren()

    if (songs) {
        songList = songs
        for (let i = 0; i < songList.length; i++) {
          let songItem
          if(songList[i].id == currentSong.id) {
            songItem = `<div class="preview-item" id="id-${i}">
              <div class="album-img"><img src="${songList[i].img}"></div>
              <div class="song-infos">
                  <h3>${songList[i].title}</h3>
                  <p>${songList[i].artist}</p>
              </div>
              <span class="playing"><p>Now playing</p></span>
            </div>` 
          } else {
            songItem = `<div class="preview-item" id="id-${i}">
              <div class="album-img"><img src="${songList[i].img}"></div>
              <div class="song-infos">
                  <h3>${songList[i].title}</h3>
                  <p>${songList[i].artist}</p>
              </div>
            </div>` 
          }
          

          songListContainer.insertAdjacentHTML('beforeend', songItem)

          document.querySelector(`#id-${i}`).addEventListener('click', function(e) {
            playFunc(songList[i], songList)
          })
      }
    }

    cover.querySelector('img').src = currentSong.img
    playerSongTitle.innerHTML = currentSong.title
    playerArtistName.innerHTML = currentSong.artist

    

}

const playPreviousSong = () => {
  const index = songList.indexOf(currentSong)
  const newIndex = index - 1
  // On s'assure qu'on n'arrive jamais en dehors du tableau et on reboucle sur la fin
  if(newIndex >= 0)
    playFunc(songList[newIndex], songList)
  else
    playFunc(songList[songList.length - 1], songList)
}

const playNextSong = () => {
  const index = songList.indexOf(currentSong)
  const newIndex = index + 1
  // On s'assure qu'on n'arrive jamais en dehors du tableau et on reboucle sur le début
  if(newIndex < songList.length)
    playFunc(songList[newIndex], songList)
  else
    playFunc(songList[0], songList)
}

// Bouton précédent
playerPrev.addEventListener('click', playPreviousSong)

// Bouton suivant
playerNext.addEventListener('click', playNextSong)

const updateIcon = () => {
    if(audioPlayer.paused) {
      playerPlayIcon.innerHTML = 'play_arrow'
  
    } else {
      playerPlayIcon.innerHTML = 'pause'
    }
}

playerPlay.addEventListener('click', () => {
    if(audioPlayer.paused)
      audioPlayer.play()
    else
      audioPlayer.pause()
})

playerProgress.addEventListener('change', (event) => {
    audioPlayer.currentTime = event.currentTarget.value
})

audioPlayer.addEventListener('timeupdate', () => {
    playerProgress.value = audioPlayer.currentTime
    playerTimeCurrent.innerText = formatTimestamp(audioPlayer.currentTime)
})

audioPlayer.addEventListener('durationchange', () => {
    playerProgress.max = audioPlayer.duration
    playerTimeDuration.innerText = formatTimestamp(audioPlayer.duration)
})
  

audioPlayer.addEventListener('play', updateIcon)
audioPlayer.addEventListener('pause', updateIcon)

export { playFunc }