

function Library (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
  this.addPlaylist = (playlist) => {
    this.playlists.push(playlist);
  }
}

function Playlist (name) {
  this.name = name;
  this.tracks = [];
  this.addTrack = (track) => {
    this.tracks.push(track);
  }
  this.overallRating = () => {
    let rating = null;
    for (let track of this.tracks) {
      rating += track.rating;
    }
    rating = rating / this.tracks.length;
    return rating;
  }
  this.totalDuration = () => {
    let duration = null;
    for (let track of this.tracks) {
      duration += track.length;
    }
    return duration;
  }
}

function Track (title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

let bryansList = new Library('bryansList', 'bryan');
let funky = new Playlist('funky');
let aJam = new Track('Jam', 4, 120);
let anotherJam = new Track('Jam2', 2, 400);
bryansList.addPlaylist(funky);
funky.addTrack(aJam);
funky.addTrack(anotherJam);
console.log(funky.overallRating());
console.log(funky.totalDuration());
