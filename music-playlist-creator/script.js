const musicCards = document.getElementById("playlist-cards");
const modalblock = document.getElementById("modal");
const span = document.getElementsByClassName("close")[0];
const modalImage = document.getElementById('SongImage');
const modalSongTitle = document.getElementById('SongTitle');
const modalArtistName = document.getElementById('ArtistName');
const songsList = document.getElementById('songs-list');
document.addEventListener("DOMContentLoaded", function () {
        data.playlists.forEach(data => {
            const musicBlock = document.createElement("div");
            musicBlock.className = "playlist-block";
            musicBlock.innerHTML = `
                <img class = "music-art" src="${data.playlist_art}"/>
                <h3 class="music-text">${data.playlist_name}</h3>
                <h4 class="music-creator">${data.playlist_creator}</h4>
                <div class= "like-icon">
                    <p class="like-text" id=like-text-${data.playlistID}>${data.likeCount}</p>
                    <svg class="like-button" id=like-button-${data.playlistID}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                    </svg>
                </div>
                <button class="delete" id="deleteButton-${data.playlistID}">
                    <img class="svgDelete" src="./assets/img/trash-solid.svg" alt="delete" />
                </button>
            `;
            musicBlock.addEventListener("click", () => openModal(data));
            musicCards.appendChild(musicBlock);

            //Like Button (increase like count by 1 when clicked on)
            const heartLike = document.getElementById(`like-button-${data.playlistID}`);
            const likeText = document.getElementById(`like-text-${data.playlistID}`);
            heartLike.addEventListener("click", (event) => {
                event.stopPropagation()
                data.likeCount += 1;
                likeText.innerText = data.likeCount;
            })
            //Delete button (delete a playlist block when clicked)
            let deleteButton = document.getElementById(`deleteButton-${data.playlistID}`);
            deleteButton.addEventListener("click", (event) => {
                event.stopPropagation()
                musicBlock.remove();

            });

        })
    // Opening and Closing Modal
    function openModal(playlist) {
        // let likeButton = document.getElementById(`like-button-${playlist.playlistID}`);
        // if (likeButton.matches(":hover")) return;
        document.getElementById('SongTitle').innerText = playlist.playlist_name;
        document.getElementById('ArtistName').innerText = playlist.playlist_creator;
        document.getElementById('SongImage').src = playlist.playlist_art;
        modalblock.style.display = "block";

        modalContent(playlist);
        let shuffleButton = document.getElementById("shuffleSong");
        console.log(shuffleButton)

        shuffleButton.onclick = function () {
            shuffleSongs(playlist);
            // update HTML after shuffleSongs is called
            // innerHtml, etc.
            modalContent(playlist)

        }

        span.onclick = function () {
            modalblock.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }


        // Modal Content Visibiltiy
        function modalContent(data) {


            // document.getElementById("songs").innerHTML = '';
            songsList.innerHTML = '';

            data.songs.forEach(song => {
                const modalMusicCards = document.createElement("div");
                modalMusicCards.className = "modal-overlay-content";
                modalMusicCards.innerHTML += `
            <div class="overlay-blocks">
                <div class= "modal-block-1">
                    <img class = "modal-image-overlay" src="${song.cover_art}"/>
                        <div class="modal-text-1">
                            <p>${song.title}</p>
                            <p>${song.artist}</p>
                            <p>${song.album}</p>
                            <p class="duration">${song.duration}</p>
                        </div>
                </div>
            </div>
            `
                    ;
                songsList.appendChild(modalMusicCards);
            })
        }
    }
});


//Shuffle Button to get random playlist
function shuffleSongs(playlist) {
    for (let i = playlist.songs.length - 1; i > 0; i--) {
        const shuffle = Math.floor(Math.random() * (i + 1));
        [playlist.songs[i], playlist.songs[shuffle]] = [playlist.songs[shuffle], playlist.songs[i]];
    }

    return playlist
}

//Redirect you to featured page
document.getElementById('home-button').addEventListener('click', function(){
    window.location.href = './featured.html';
})

//Search Bar Button Functionality
const searchBarButton = document.getElementById("SearchBar");
searchBarButton.addEventListener('keyup', (event) => {
    const searchText = event.target.value.toLowerCase();
    const musicBlockForSearch = document.querySelectorAll('.playlist-block');{
    musicBlockForSearch.forEach(musicBlock => {
        const playListName = musicBlock.querySelector('.music-text').textContent.toLowerCase();
        const playListCreator = musicBlock.querySelector('.music-creator').textContent.toLowerCase();
        if(playListName.includes(searchText) || playListCreator.includes(searchText)){
            musicBlock.style.display = "block";
        }
        else{
            musicBlock.style.display = "none";
        }
    });
    }
});
