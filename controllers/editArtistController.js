const express = require("express");
const db = require("../models");
const router = express.Router();

// ======================================================
// Editing an already existing piece for an artist Route
router.get("/editArtistContent/:id", function(req, res) {

    db.Artwork.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            model: db.Artist
        }]
    }).then(dbContent => {

        hbsObject = {
            piece: dbContent,
            pageTitle: 'Editing',
            customCss: '../css/editPage.css',
            customJS: '../javascript/editContent.js'
        }

        console.log(hbsObject);

        res.render('editArtistContent', hbsObject);

    });
});
// Update an already existing piece for an artist
router.put("/api/artworks/:id", function(req, res) {
    console.log(req.body);
    db.Artwork.update(
        req.body, {
            where: {

                id: req.body.ArtistId
            }
        }).then(dbArtwork => {
        res.json(dbArtwork);
    })
});

// Loads specific artpiece info into edit form
router.get("/api/editArtwork/:id", function(req, res) {
    db.Artwork.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            model: db.Artist
        }]
    }).then(dbContent => {

        res.json(dbContent);
    })
});
// ======================================================

module.exports = router;