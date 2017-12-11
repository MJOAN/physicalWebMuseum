const express = require("express");
const db = require("../models");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');



/*router.post("/signup", function(req, res, next){
    console.log(req.body.email);
      db.User.create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
      }).then(function(user){
        console.log("passport auth not running yet");
        passport.authenticate("local", {
            failureRedirect:"/", 
            successRedirect: "/settings"})(req, res, next)
      })
    });
router.post("/signin", passport.authenticate('local', { 
  failureRedirect: '/',
  successRedirect: '/login'
}))
*/


router.post("/signup", function(req, res, next){
console.log(req.body.email);
  db.User.findOne({
    where: {
     email: req.body.email
    }
  }).then(function(user){
    if(!user){
      db.User.create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
      }).then(function(user){
        passport.authenticate("local", {failureRedirect:"/", successRedirect: "/login"})(req, res, next)
      })
    } else {
      res.send("user is now signed up! Redirect to the settings page!");
      res.json(user);
    }
  })
})

router.post("/login", passport.authenticate('local', { 
  failureRedirect: '/signin',
  successRedirect: '/settings'
}));


router.get("/login", function(req, res) {
  res.render("login");
});

router.get("/signup", function(req, res) {
    res.render("signup");
});

router.get("/logout", function(req, res) {
    req.logout();
    res.redirect('/login');
});

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

            // console.log(resObj);

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
});





module.exports = router;