function test() {
    // Playlist array
    var files = [
        "./music/2.mp3",
        "music/1.mp3",
      
        "music/3.mp3",
        "music/4.mp3"
    ];
 
    // Current index of the files array
    var i = 0;
 
    // Get the audio element
    var music_player = document.querySelector("#music_list audio");
 
    // function for moving to next audio file
    function next() {
        // Check for last audio file in the playlist
        if (i == files.length - 1) {
            i = 0;
        } else {
            i++;
        }
 
        // Change the audio element source
        music_player.src = files[i];
    }
 
    // Check if the player is selected
    if (music_player === null) {
        throw "Playlist Player does not exists ...";
    } else {
        // Start the player
        music_player.src = files[i];
 
        // Listen for the music ended event, to play the next audio file
        music_player.addEventListener('ended', next, false)
    }
 
};
test();