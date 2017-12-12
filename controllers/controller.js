const express = require("express");
const db = require("../models");
const router = express.Router();

// ======================================================
// What the customers see, art piece at the musuem 
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

module.exports = router;
