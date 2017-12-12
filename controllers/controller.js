const express = require("express");
const db = require("../models");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');

router.post("/signup", function(req, res, next){
    console.log(req.body.email);
    db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(function(user) {
                if (!user) {
                    db.User.create({
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password)
                    }).then(function(user) {
                        passport.authenticate("local", { failureRedirect: "/", successRedirect: "/login" })(req, res, next)
                    })   } else {
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

    // for you to play around with 

    // if authenticated 

    // db.User.findAll({
    //     where: {
    //         email: req.body.email
    //     }
    // }).then(dbUser => {

    //     hbsObject = {
    //         user: dbUser,
    //         pageTitle: 'Login Page',
    //         customCSS: './..',
    //         customJS: './javascript/login.js'
    //     }

    // })

  res.render("login", hbsObject);
});

router.get("/signup", function(req, res) {
    res.render("signup");
});

router.get("/logout", function(req, res) {
    req.logout();
    res.redirect('/login');
});

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

// Could use a different route name. Should save api for prefilling table for db edits

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
