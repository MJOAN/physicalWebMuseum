const express = require("express");
const db = require("../models");
const router = express.Router();
<<<<<<< HEAD
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');



router.get("/login", function(req, res) {
  res.render("login");
});

router.post("/login", passport.authenticate('local', { 
  failureRedirect: '/signin',
  successRedirect: '/settings'
}))

router.get("/signup", function(req, res) {
    res.render("signup");
});


router.post("/signup", function(req, res, next){
console.log(req.body);
      db.User.create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
      }).then(function(user){
        passport.authenticate("local", {
            failureRedirect:"/", 
            successRedirect: "/login"})(req, res, next)
      })
    });

router.get("/logout", function(req, res) {
    req.logout();
    res.redirect('/login');
});

=======
var Handlebars;
>>>>>>> bcdc5c56e505d12eec2e26eb4c7b0767e5b3abc5

router.get("/", function(req, res) {
    res.render("landingPage");
});

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

<<<<<<< HEAD
            console.log(resObj);
=======
            // console.log(resObj);
>>>>>>> bcdc5c56e505d12eec2e26eb4c7b0767e5b3abc5

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
                name: artworks.dataValues.Artist.dataValues.name
            });
        });

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

<<<<<<< HEAD
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
            pageTitle: 'Artist Content'
        }

        res.render('viewArtistContent', hbsObject);
    });
});

=======
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
            pageTitle: 'Artist Content'
        }

        res.render('viewArtistContent', hbsObject);
    })
})

>>>>>>> bcdc5c56e505d12eec2e26eb4c7b0767e5b3abc5
router.get("/api/artworks/:id", function(req, res) {
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
            pieces: dbContent
            // ,
            // pageTitle: 'Artist Content'
        }

        res.json(hbsObject);
    })

    // res.render('viewArtistContent', hbsObject);
});

router.post("/api/artworks/:id", function(req, res) {
    console.log(req.body);
    db.Artwork.create(req.body).then(dbArtwork => {
        res.json(dbArtwork);
    })
<<<<<<< HEAD
});
=======
})
>>>>>>> bcdc5c56e505d12eec2e26eb4c7b0767e5b3abc5





module.exports = router;