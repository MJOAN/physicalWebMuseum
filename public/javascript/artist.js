$(document).ready(function() {

    const artistInput = $('#artistName');

    $('#enterArtist').on("submit", enterArtistIntoDatabase);

    getArtists();

    function enterArtistIntoDatabase(event) {
        event.preventDefault();

        if (!artistInput.val().trim().trim()) {
            return;
        }

        const newArtist = {
            name: artistInput.val().trim()
        }

        submitArtist(newArtist);

    }

    function getArtists() {
        $.get("/api/artists", function() {
            // console.log('gotten');
        })
    }

    function submitArtist(artist) {
        $.post("/api/artists", artist, function() {
            window.location.href = "/settings";
        });
    }

});