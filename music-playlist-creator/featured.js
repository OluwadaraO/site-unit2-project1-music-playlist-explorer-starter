const musicHeader = document.getElementById('ImageDetails');
const SongDetailsHome = document.getElementById('SongDetails');
document.addEventListener("DOMContentLoaded", function () {

    //function to move from the home page to the featured playlist
    featuredSongs = document.getElementById('FeaturedPlaylistSong');
    document.getElementById('featuredPlaylist').addEventListener('click', function() {
        window.location = './index.html'
    });

    //function to make my random playlist and display its information
    let randomPlaylist = getRandomPlayList();
    const  ImageDetails = document.createElement("div");
    ImageDetails.className = "ImageDetails";
    ImageDetails.innerHTML = `
    <img class="FeaturedImage" src="${randomPlaylist.playlist_art}">
    <p class="FeaturedPlaylistSongTitle">${randomPlaylist.playlist_name}</p>
    `
    SongDetailVisible(randomPlaylist);
    musicHeader.appendChild(ImageDetails);

    //function to get Song Details from data file and display it
    function SongDetailVisible(data){
        SongDetailsHome.innerHTML = '';
        data.songs.forEach(song => {
            const SongDetails = document.createElement("div");
            SongDetails.className = "SongDetails";
            SongDetails.innerHTML += `
            <div>
            </div>
            <div class="song-box">
                <img class="SongImage" src="${song.cover_art}">
                <div class="songDetailsSide">
                    <p class="song-title">${song.title}</p>
                    <p class="song-artist">${song.artist}</p>
                    <p class="song-album">${song.album}</p>
                </div>
            </div>`
        SongDetailsHome.appendChild(SongDetails);
        });
    }

    //function to generate a random playlist
    function getRandomPlayList() {
        const randomPlaylist = Math.floor(Math.random() * data.playlists.length);
        return data.playlists[randomPlaylist];
    }
});
