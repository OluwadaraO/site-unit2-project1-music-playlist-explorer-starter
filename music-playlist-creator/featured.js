const musicHeader = document.getElementById('ImageDetails');
document.addEventListener("DOMContentLoaded", function () {

    featuredSongs = document.getElementById('FeaturedPlaylistSong');

    document.getElementById('featuredPlaylist').addEventListener('click', function() {
        window.location = './index.html'
    });

    let randomPlaylist = getRandomPlayList();
    const HomePagePlayList = document.createElement("div");
    HomePagePlayList.className = "ImageDetails";
    HomePagePlayList.innerHTML = `
    <img class="FeaturedImage" src="${randomPlaylist.playlist_art}">
    <p class="FeaturedPlaylistSongTitle">${randomPlaylist.playlist_name}</p>
    `

    console.log(HomePagePlayList);
    musicHeader.appendChild(HomePagePlayList);
    console.log(musicHeader);


    //function to get a random playlist from data file
    function getRandomPlayList() {
        const randomPlaylist = Math.floor(Math.random() * data.playlists.length);
        return data.playlists[randomPlaylist];
    }
    // // Modal Content Visibiltiy
    // function modalContent(data) {


    //     // document.getElementById("songs").innerHTML = '';
    //     songsList.innerHTML = '';

    //     data.songs.forEach(song => {
    //         const modalMusicCards = document.createElement("div");
    //         modalMusicCards.className = "modal-overlay-content";
    //         modalMusicCards.innerHTML += `
    //     <div class="overlay-blocks">
    //         <div class= "modal-block-1">
    //             <img class = "modal-image-overlay" src="${song.cover_art}"/>
    //                 <div class="modal-text-1">
    //                     <p>${song.title}</p>
    //                     <p>${song.artist}</p>
    //                     <p>${song.album}</p>
    //                 </div>
    //             <div class="duration">
    //                 <p>${song.duration}</p>
    //             </div>
    //         </div>
    //     </div>
    //     `
    //             ;
    //         songsList.appendChild(modalMusicCards);
    //     })
    // }
});
