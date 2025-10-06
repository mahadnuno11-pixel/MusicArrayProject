let songs = ["Shape of You", "Blinding Lights", "Stay"];
let artists = ["Ed Sheeran", "The Weeknd", "Justin Bieber"];
let genres = ["Pop", "R&B", "Pop"];
let favorites = ["Stay", "Blinding Lights"];

function displaySelectedSongs() {
  let first = songs[0];
  let middle = songs[Math.floor(songs.length / 2)];
  let last = songs[songs.length - 1];
  console.log(`🎶 First Song: ${first}`);
  console.log(`🎶 Middle Song: ${middle}`);
  console.log(`🎶 Last Song: ${last}`);
}

function showMusicStats() {
  console.log(`📊 You have ${songs.length} songs, ${artists.length} artists, and ${genres.length} genres.`);
}

function addSongToEnd() {
  songs.push("Peaches");
  console.log(`✅ Added "Peaches" to the end.`);
}

function addSongToStart() {
  songs.unshift("Perfect");
  console.log(`✅ Added "Perfect" to the start.`);
}

function removeLastSong() {
  let removed = songs.pop();
  console.log(`❌ Removed "${removed}" from the end.`);
}

function removeFirstSong() {
  let removed = songs.shift();
  console.log(`❌ Removed "${removed}" from the start.`);
}

function displayAllSongsForEach() {
  console.log("🎵 All Songs:");
  songs.forEach(song => console.log(song));
}

function createFormattedSongList() {
  let formatted = songs.map((song, index) => `${song} - ${artists[index]} (${genres[index]})`);
  console.log("🎵 Formatted Song List:");
  formatted.forEach(line => console.log(line));
}

function searchSong() {
  let songToSearch = "Perfect";
  if (songs.indexOf(songToSearch) !== -1) {
    console.log(`✅ "${songToSearch}" was found in your song list!`);
  } else {
    console.log(`❌ "${songToSearch}" was NOT found in your song list.`);
  }
}

function isFavorite() {
  let favoriteSong = "Stay";
  if (favorites.includes(favoriteSong)) {
    console.log(`❤️ "${favoriteSong}" is one of your favorites!`);
  } else {
    console.log(`💔 "${favoriteSong}" is not in your favorites.`);
  }
}

function showDestructuredSongs() {
  let [first, middle, last] = songs;
  console.log("Destructured Songs:");
  console.log(`${first}, ${middle}, ${last}`);
}
