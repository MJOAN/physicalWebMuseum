const express = require("express");
const db = require("../models");
const router = express.Router();

// ======================================================
// Adding a new piece for an already existing artist
// Clicked from Settings Page
router.get("/artistContent/:id", function(req, res) {
    db.Artwork.findAll({
        where: {
            ArtistId: req.params.id
        },
        include: [{
            model: db.Artist
        }]
    }).then(dbContent => {

        hbsObject = {
            pieces: dbContent,
            pageTitle: 'Artist Content',
            customCss: '../css/viewArtistContent.css',
            customJS: '../javascript/createContent.js'
        }

        res.render('viewArtistContent', hbsObject);
    })
});

// Loads all pieces of that specific artist for the /artistContent/:id Route
router.get("/api/artworks/:id", function(req, res) {
    db.Artwork.findAll({
        where: {
            ArtistId: req.params.id
        },
        include: [{
            model: db.Artist
        }]
    }).then(dbContent => {

        hbsObject = {
            pieces: dbContent
        }

        res.json(hbsObject);
    })
});
// Creates a new piece for that specific artist at /artistContent/:id Route
router.post("/api/artworks/:id", function(req, res) {
    console.log(req.body);
    db.Artwork.create(req.body).then(dbArtwork => {
        res.json(dbArtwork);
    })
});

// Deletes a specific art piece
router.delete("/api/editArtwork/:id", function(req, res) {

    // console.log(req.url);

    const id = req.url.split("/editArtwork/")[1];

    console.log(id);

    db.Artwork.destroy({
        where: {
            id: id
        }
    }).then(dbArtwork => {

        res.json(dbArtwork);
    });

});
// ======================================================

module.exports = router;