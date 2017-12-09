$(document).ready(function() {

const route = $('#routeName');
const date = $('#date');
const title = $('#pieceTitle');
const description = $('#desc');
const medium = $('#medium');
const beaconId = $('#beacon');
const img = $('#googleCloudImg');
const video = $('#googleCloudVideo');
const audio = $('#googleCloudAudio');
const twitter = $('#twitterEmbedNumber');

    $('#artistAddContent').on("submit", addEntryForAnArtist);


    $(document).on("click", '.edit', function() {

            console.log($(this).data("id"));

            var self = $(this);

            $(".editRow" + ($(this).data("id"))).html('<form style="height: 250px; overflow: auto; border: black solid 1px; width: 90%;" id="editArtistContent" class="p-2">' +
                // Route Input
                '<div class="form-group row">' +
                '<label for="routeNameEdit" class="col-sm-2 col-form-label">Route Name (URL)</label>' +
                '<div class="col-sm-10">' +
                '<input class="form-control form-control-sm" type="text" id="routeNameEdit" placeholder="No spaces allowed">' +
                '</div></div>' +
                // Date Input
                '<div class="form-group row">' +
                '<label for="dateEdit" class="col-sm-2 col-form-label">Date Created</label>' +
                '<div class="col-sm-10">' +
                '<input class="form-control form-control-sm" type="date" id="dateEdit" placeholder="No spaces allowed">' +
                '</div></div>' +
                // Title Input
                '<div class="form-group row">' +
                '<label for="titleEdit" class="col-sm-2 col-form-label">Title</label>' +
                '<div class="col-sm-10">' +
                '<input class="form-control form-control-sm" type="text" id="titleEdit">' +
                '</div></div>' +
                // Description
                '<div class="form-group row">' +
                '<label for="descEdit" class="col-sm-2 col-form-label">Description</label>' +
                '<div class="col-sm-10">' +
                '<textarea class="form-control form-control-sm" type="text" id="descEdit" rows="3"></textarea>' +
                '</div></div>' +
                // Medium
                '<div class="form-group row">' +
                '<label for="mediumEdit" class="col-sm-2 col-form-label">Medium</label>' +
                '<div class="col-sm-10">' +
                '<input class="form-control form-control-sm" type="text" id="mediumEdit">' +
                '</div></div>' +
                // Beacon ID
                '<div class="form-group row">' +
                '<label for="beaconEdit" class="col-sm-2 col-form-label">Beacon ID</label>' +
                '<div class="col-sm-10">' +
                '<input class="form-control form-control-sm" type="text" id="beaconEdit">' +
                '</div></div>' +
                // Twitter Embed
                '<div class="form-group row">' +
                '<label for="twitterEdit" class="col-sm-2 col-form-label">Twitter Embed Number</label>' +
                '<div class="col-sm-10">' +
                '<input class="form-control form-control-sm" type="text" id="twitterEdit">' +
                '</div></div>' +
                // Img
                '<div class="form-group row">' +
                '<label for="imgEdit" class="col-sm-2 col-form-label">Date Created</label>' +
                '<div class="col-sm-10">' +
                '<input class="form-control form-control-sm" type="url" id="imgEdit">' +
                '</div></div>' +
                // Video
                '<div class="form-group row">' +
                '<label for="videoEdit" class="col-sm-2 col-form-label">Date Created</label>' +
                '<div class="col-sm-10">' +
                '<input class="form-control form-control-sm" type="url" id="videoEdit">' +
                '</div></div>' +
                // Audio
                '<div class="form-group row">' +
                '<label for="audioEdit" class="col-sm-2 col-form-label">Date Created</label>' +
                '<div class="col-sm-10">' +
                '<input class="form-control form-control-sm" type="url" id="audioEdit">' +
                '</div></div>' +
                // Submit for Edit
                '<a class="btn btn-success editDB" href="#">Edit Content</button>' +
                '</form>')

            $(document).on("click", '.editDB', function() {

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

                    if (!routeEdit.val().trim() ||
                        !dateEdit.val() ||
                        !titleEdit.val().trim() ||
                        !descriptionEdit.val().trim() ||
                        !mediumEdit.val().trim() ||
                        !beaconIdEdit.val().trim() ||
                        !imgEdit.val().trim()) {
                        return;
                    }

                    var urlEdit = window.location.href;
                    var artistIdEdit = url.split("artistContent/")[1];

                    console.log(artistIdEdit.slice(0, 1));

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
                        ArtistId: artistIdEdit.slice(0, 1)
                    }

                    updateArtwork(newPiece, self.data("id"));

            });

    });

loadContent();

const url = window.location.href;
var artistId;

function addEntryForAnArtist(event) {
    event.preventDefault();

    artistId = url.split("artistContent/")[1];

    console.log(artistId);

    if (!route.val().trim() ||
        !date.val() ||
        !title.val().trim() ||
        !description.val().trim() ||
        !medium.val().trim() ||
        !beaconId.val().trim() ||
        !img.val().trim()) {
        return;
    }

    const newPiece = {
        route: route.val().trim(),
        title: title.val().trim(),
        description: description.val().trim(),
        created_date: date.val(),
        medium: medium.val().trim(),
        imgURL: img.val().trim(),
        videoURL: video.val().trim(),
        audioURL: audio.val().trim(),
        beaconID: beaconId.val().trim(),
        twitterData: twitter.val().trim(),
        ArtistId: artistId
    }

    submitArtWork(newPiece);

}

function loadContent() {
    $.get("/api/artworks/" + artistId, function() {
        // console.log('here ya are');
    })
}

function submitArtWork(artwork) {
    $.post("/api/artworks/" + artistId, artwork, function() {
        window.location.href = "/artistContent/" + artistId;
    });
}

function updateArtwork(artwork, artworkID) {
    $.ajax({
        method: "PUT",
        url: "/api/artworks/" + artworkID,
        data: artwork
    })
    .done(function() {
      window.location.href = "/artistContent/" + artworkID;
    });
}
});