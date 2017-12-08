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

	$('#artistAddContent').on("submit", addEntryForAnArtist);

	loadContent();

	const url = window.location.href;
	var artistId;

	// console.log(url);

	function addEntryForAnArtist (event) {
        event.preventDefault();

        artistId = url.split("artistContent/")[1];

        console.log(artistId);

        if (!route.val().trim() 
        	|| !date.val() 
        	|| !title.val().trim()
        	|| !description.val().trim()
        	|| ! medium.val().trim()
        	|| ! beaconId.val().trim()
        	|| ! img.val().trim()) {
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
            ArtistId: artistId
        }

        submitArtWork(newPiece);

    }

    function loadContent() {
        $.get("/api/artworks/" + artistId, function() {
            console.log('here ya are');
        })
    }

    function submitArtWork(artwork) {
        $.post("/api/artworks/" + artistId, artwork, function() {
            window.location.href = "/artistContent/" + artistId;
        });
    }
});