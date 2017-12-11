const express = require("express");
const db = require("../models");
const router = express.Router();

// Routes are grouped by where they are accessed on the browser
// Hopefully this helps when trying to modularize the controller


// ======================================================
// Root: Landing Page
router.get("/", function(req, res) {

    hbsObject = {
        pageTitle: 'Home Page',
        customCss: './css/homePage.css'
    }

    res.render("landingPage", hbsObject);
});
// ======================================================


//=======================================================
// Log In / Signup / Auth Routes
router.get("/signup", function(req, res) {
    res.render("signup");
});
// ======================================================


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
            customCss: './css/homePage.css',
            customJS: './javascript/artist.js'
        }

        res.render('manageExhibitions', hbsObject);
    })
});

// Loads Pre-Exsisting Artists into Settings Page
router.get("/api/artists", function(req, res) {
    db.Artist.findAll({
        include: [{
            model: db.Artwork
        }],
        order: [
            ['id', 'ASC']
        ]
    }).then(authorList => {

        hbsObject = {
            artists: authorList
        }

        res.json(hbsObject);

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

        // hbsObject = {
        //     artists: dbArtist
        // }

        res.json(dbArtist);
    })
});
// ======================================================


// ======================================================
// What the customers see, art piece at the musuem Routes
// ======================================================
router.get("/artwork/:route", function(req, res) {
    db.Artwork.findAll({
        where: {
            route: req.params.route
        },
        include: [{
            model: db.Artist
        }]
    }).then(artworks => {
        const resObj = artworks.map(artworks => {

            return Object.assign({}, {
                route: artworks.dataValues.route,
                title: artworks.dataValues.title,
                desc: artworks.dataValues.description,
                img: artworks.dataValues.imgURL,
                video: artworks.dataValues.videoURL,
                audio: artworks.dataValues.audioURL,
                medium: artworks.dataValues.medium,
                created: artworks.dataValues.created_date,
                beaconID: artworks.dataValues.beaconID,
                twitter: artworks.dataValues.twitterData,
                name: artworks.dataValues.Artist.dataValues.name,
                pageTitle: artworks.dataValues.Artist.dataValues.name + 'Exhibition',
                customCss: '../css/artworkRoutes.css'
            });
        });

        console.log(resObj[0]);

        res.render("index", resObj[0]);
    });
});



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
// ======================================================




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

// Loads specific artpiece info into form
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