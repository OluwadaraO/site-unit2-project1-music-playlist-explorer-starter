const musicCards = document.getElementById("playlist-cards");
const modalblock = document.getElementById("modal");
const span = document.getElementsByClassName("close")[0];
const modalImage = document.getElementById('SongImage');
const modalSongTitle = document.getElementById('SongTitle');
const modalArtistName = document.getElementById('ArtistName');
document.addEventListener("DOMContentLoaded", function() {

// Playlist Block
    data.playlists.forEach(data => {
        const musicBlock = document.createElement("div");
        musicBlock.className = "playlist-block";
        musicBlock.innerHTML = `<img class = "music-art" src="${data.playlist_art}"/>
        <h2 class="music-text">${data.playlist_name}</h2>
        <h3 class="music-text">${data.playlist_creator}</h3>
        <p class="music-text">${data.likeCount}</p>
        `;
        console.log(musicBlock);
        musicBlock.addEventListener("click", () => openModal(data));
        musicCards.appendChild(musicBlock);

    })
})

// Opening and Closing Modal
function openModal(data) {
    document.getElementById('SongTitle').innerText = data.playlist_name;
    document.getElementById('ArtistName').innerText = data.playlist_creator;
    document.getElementById('SongImage').src = data.playlist_art;
    modalblock.style.display = "block";

    modalContent(data.songs);
}
span.onclick = function() {
    modalblock.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}

// Modal Content Visibiltiy
function modalContent(playlist){
    const modalMusicCards = document.createElement("div");


    for(let idx = 0; idx < data.playlists[idx].songs.length; idx++) {
        console.log("songs", data.playlists[idx].songs);
        data.playlists[idx].songs.forEach(song => {
            modalMusicCards.className = "modal-overlay-content";
            modalMusicCards.innerHTML = `<img src="${song.cover_art}"/>
            <h1>${song.title}</h1>
            <h3>${song.artist}</h3>
            <h5>${song.duration}</h5>
            `;

            modalblock.appendChild(modalMusicCards);
        })

    document.getElementById("modal-content").appendChild(modalMusicCards);

}}
modalContent(data.playlists);




//data.playlists[0];
// for(let idx = 0; idx < data.playlists.length; idx++) {

//     let card = document.createElement("section");
//     card.classList.add("card");

//     let image = document.createElement("img");
//     image.src = data.playlists[idx].playlist_art;

//     let name = document.createElement("p");
//     name.innerText = data.playlists[idx].playlist_name;

//     let artist = document.createElement("p");
//     artist.innerText = data.playlists[idx].playlist_creator;

//     card.appendChild(image);
//     card.appendChild(name);
//     card.appendChild(artist);

//     document.getElementById("play-cards").appendChild(card);


// }



// const playlistTitle = document.getElementById('PlaylistTitle');
// const playlistArtist = document.getElementById('PlaylistArtist');
// const playlistImage = document.getElementById('PlaylistImage');
// const playlistLike = document.getElementById('LikeCount');
// function getMusicPlaylist(){
//     let playlistTitle = document.createElement('h1');
//     playlistTitle.innerText = 'Playlist Title';
//     playlistArtist.innerText = 'Playlist Artist';
//     playlistImage.src = 'Playlist Image';
//     playlist.appendChild(playlistTitle);
//     playlist.appendChild(playlistArtist);
//     playlist.appendChild(playlistImage);
// }


// for (let i = 0; i < data.playlists[i].length; i++) {
//     playListTitle = console.log(data.playlists[i].playlist_name);
//     playListArtist = console.log(data.playlists[i].playlist_creator);
//     playlistImage = console.log(data.playlists[i].playlist_art);
//     playlistLike = console.log(data.playlists[i].likeCount);
// }
// const playlistSection = document.get...
// fn add content
    //playlistSection.document.appendChild(elements)
