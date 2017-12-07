const express = require("express");
const db = require("../models");
const router = express.Router();

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

                // console.log(artworks.dataValues.Artist.dataValues.name);


                    return Object.assign({}, {
                            title: artworks.dataValues.title,
                            desc: artworks.dataValues.description,
                            img: artworks.dataValues.imgURL,
                            video: artworks.dataValues.videoURL,
                            audio: artworks.dataValues.audioURL,
                            medium: artworks.dataValues.medium,
                            created: artworks.dataValues.created_date,
                            beaconID: artworks.dataValues.beaconID,
                            name: artworks.dataValues.Artist.dataValues.name
                    }); 
            });

            // console.log(resObj);

            res.render("index", resObj[0]);
        });
    });

router.get("/api/artists", function(req, res) {
    db.Artist.findAll({
        include: [{
            model: db.Artwork
        }]
    }).then(authorList => {
        // res.json(hbsObject);

        hbsObject = {
            artists: authorList,
            pageTitle: 'Exhibition Management', 
            css: 'style.css'
        }

        // res.json(hbsObject);

        res.render("manageExhibitions.handlebars", hbsObject);
    });
});


module.exports = router;
