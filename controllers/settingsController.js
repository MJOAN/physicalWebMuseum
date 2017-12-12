const express = require("express");
const db = require("../models");
const router = express.Router();

// ======================================================
// Settings & Admin Routes
router.get("/settings", function(req, res) {
    db.Artist.findAll({
        include: [{
            model: db.Artwork
        }],
        order: [
            ['id', 'ASC']
        ]
    }).then(authorList => {

        hbsObject = {
            artists: authorList,
            pageTitle: 'Exhibition Management',
            customCss: './css/settingsPage.css',
            customJS: './javascript/artist.js'
        }
      
        res.render('manageExhibitions', hbsObject);
    })
});

// Loads Pre-Exsisting Artists into Settings Page
router.get("/api/artists", function(req, res) {

        res.json(hbsObject);
    });
// });

router.get("/settings", function(req, res) {
    db.Artist.findAll({
        include: [{
            model: db.Artwork
        }],
        order: [
            ['id', 'ASC']
        ]
    }).then(authorList => {

        hbsObject = {
            artists: authorList,
            pageTitle: 'Exhibition Management',
            css: 'style.css'
        }

        res.render('manageExhibitions', hbsObject);
    })
})

router.post("/api/artists", function(req, res) {
    console.log(req.body);
    db.Artist.create(req.body).then(function(dbArtist) {
        res.json(dbArtist);
    })
})

// Adding Already exsisting artist, content into db

router.get("/artistContent/:id", function(req, res) {
    db.Artwork.findAll({
        where: {
            ArtistId: req.params.id
        },
        include: [{
            model: db.Artist
        }]
    }).then(dbContent => {

        // if no artwork for that artist enter in the form handlebars boolean?

        hbsObject = {
            pieces: dbContent,
            pageTitle: 'Artist Content',
            customCss: '../css/viewArtistContent.css',
            customJS: '../javascript/createContent.js'
        }

        res.render('viewArtistContent', hbsObject);
    });
});

// Creates a New Artist for the Settings Page
router.post("/api/artists", function(req, res) {
    console.log(req.body);
    db.Artist.create(req.body).then(function(dbArtist) {
        res.json(dbArtist);
    })
});
// Allows to delte an artist from Settings Page
router.get("/api/artists/:id", function(req, res) {
    db.Artist.findAll({
        where: {
            id: req.params.id
        },
        include: [{
            model: db.Artwork
        }]
    }).then(authorList => {

        res.json(authorList);

    });
});

// Deletes artist from Settings Page
router.delete("/api/artists/:id", function(req, res) {

    // console.log(req.url);

    const id = req.url.split("/artists/")[1];

    console.log(id);

    db.Artist.destroy({
        where: {
            id: id
        },
        include: [{
            model: db.Artwork
        }]
    }).then(dbArtist => {

        res.json(dbArtist);
    })
});
// ======================================================

module.exports = router;