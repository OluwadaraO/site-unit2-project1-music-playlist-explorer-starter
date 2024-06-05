var modal = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];
function openModal(SongTitle) {
    document.getElementById('SongTitle').innerText = SongTitle.name;
    document.getElementById('ArtistName').innerText = ArtistName.name;
    document.getElementById('SongImage').src = SongTitle.imageUrl;
    modal.style.display = "block";
}
span.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}
const playlistSection = document.getElementById('PlaylistTitle');
function getMusicPlaylist(){
    for (let songs in data.playlists, ){
        
    }
}
 
// const playlistSection = document.get...
// fn add content
    //playlistSection.document.appendChild(elements)