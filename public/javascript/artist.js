$(document).ready(function() {

    const artistInput = $('#artistName');

    $('#enterArtist').on("submit", enterArtistIntoDatabase);


    $(".delete-artist").on("click", function() {

        const artistId = $(this).data("id");

        deleteArtist(artistId);

    });

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
        });
    }

    function submitArtist(artist) {
        $.post("/api/artists", artist, function() {
            window.location.href = "/settings";
        });
    }

    function deleteArtist(artistId) {

        console.log(artistId);

        $.ajax({
                method: "DELETE",
                url: "/api/artists/" + artistId,
            }).done(function() {
                window.location.href = "/settings";
        });
    }

});