"use strict";
/*

Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

*/
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks)
        album.tracks = tracks;
    return album;
}
// Call the function for three different albums
console.log(make_album("Artist1", "Title1")); // { artist: 'Artist1', title: 'Title1' }
console.log(make_album("Artist2", "Title2", 12)); // { artist: 'Artist2', title: 'Title2', tracks: 12 }
console.log(make_album("Artist3", "Title3", 8)); // { artist: 'Artist3', title: 'Title3', tracks: 8 }
/*

This function uses the optional tracks parameter. If a value for tracks is provided when the function is called, it is added to the album object. Otherwise, the album object does not include a tracks property. The function is then called with the details of three albums. For the first album, no tracks value is specified. For the second and third albums, a tracks value is specified. The returned album objects are then printed out.

*/ 
//# sourceMappingURL=Q40.js.map