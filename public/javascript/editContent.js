$(document).ready(function() {

const routeEdit = $('#routeNameEdit');
const dateEdit = $('#dateEdit');
const titleEdit = $('#titleEdit');
const descriptionEdit = $('#descEdit');
const mediumEdit = $('#mediumEdit');
const beaconIdEdit = $('#beaconEdit');
const imgEdit = $('#imgEdit');
const videoEdit = $('#videoEdit');
const audioEdit = $('#audioEdit');
const twitterEdit = $('#twitterEdit');

// Not editing this, just for reference
var artist = $('#artistId').text();
// var artwork = $('#artworkId').text();

loadContent();

console.log(imgEdit.val().trim());
// console.log(artistId[artistId.length - 1]);
// console.log(artworkId[artworkId.length - 1]);

const artistId = artist[artist.length - 1];
// const artworkId = artwork[artwork.length - 1];

// console.log(artworkId);

const url = window.location.href;
var artworkId = url.split("/editArtistContent/")[1];

console.log(artworkId);

	$('#editArtistContent').on("submit", function() {	

		if (!routeEdit.val().trim() ||
                        !dateEdit.val() ||
                        !titleEdit.val().trim() ||
                        !descriptionEdit.val().trim() ||
                        !mediumEdit.val().trim() ||
                        !beaconIdEdit.val().trim() ||
                        !imgEdit.val().trim()) {
                        return;
                    }

        const newPiece = {
            route: routeEdit.val().trim(),
            title: titleEdit.val().trim(),
            description: descriptionEdit.val().trim(),
            created_date: dateEdit.val(),
            medium: mediumEdit.val().trim(),
            imgURL: imgEdit.val().trim(),
            videoURL: videoEdit.val().trim(),
            audioURL: audioEdit.val().trim(),
            beaconID: beaconIdEdit.val().trim(),
            twitterData: twitterEdit.val().trim(),
            ArtistId: artistId
        }

        updateArtwork(newPiece, artistId);

	});

function loadContent() {
    $.get("/api/editArtwork/" + artworkId, function() {
        // console.log('here ya are hey hey');
    })
}


function updateArtwork(artwork, artistID) {
    $.ajax({
        method: "PUT",
        url: "/api/artworks/" + artistID,
        data: artwork
    })
    .done(function() {
      window.location.href = "/artistContent/" + artistID;
    });
}
});