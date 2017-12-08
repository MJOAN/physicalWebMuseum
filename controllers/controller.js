const express = require("express");
const db = require("../models");
const router = express.Router();
// var Handlebars;

router.get("/", function(req, res) {

    hbsObject = {
        pageTitle: 'Home Page',
        customCss: './css/style.css'
    }

    res.render("landingPage", hbsObject);
});

router.get("/signup", function(req, res) {
    res.render("signup");
})

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
                customCss: '../css/style.css'
            });
        });

        console.log(resObj[0]);

        res.render("index", resObj[0]);
    });
});

// Could use a different route name. Should save api for prefilling table for db edits

router.get("/api/artists", function(req, res) {
    db.Artist.findAll({
        include: [{
            model: db.Artwork
        }]
    }).then(authorList => {

        hbsObject = {
            artists: authorList
        }

        res.json(hbsObject);

    });
});

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
            customCss: './css/style.css',
            customJS: './javascript/artist.js'
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
            customCss: '../css/style.css',
            customJS: '../javascript/createContent.js'
        }

        res.render('viewArtistContent', hbsObject);
    })
})

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

router.post("/api/artworks/:id", function(req, res) {
    console.log(req.body);
    db.Artwork.create(req.body).then(dbArtwork => {
        res.json(dbArtwork);
    })
})





module.exports = router;