var playlist = {
  artist: "Bill Evans"
};
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}