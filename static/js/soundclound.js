var client_id = 'lmao';

// Need to make ajax request to backend to stream sound
//https://developers.soundcloud.com/docs#streaming
SC.initialize({
    client_id: client_id
});

SC.stream('/tracks/70688035').then(function(player) {
    player.play();
});