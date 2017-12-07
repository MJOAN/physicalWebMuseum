const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/:route", function(req, res) {
    db.pexq5x6f1q61gr26.Artwork.findAll({
        where: {
            route: req.params.route
        },
        include: [{
            model: db.pexq5x6f1q61gr26.Artist,
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


module.exports = router;


/*

            var hbsObject = {
                title: result[0].dataValues.title,
                desc: result[0].dataValues.description,
                img: result[0].dataValues.imgURL,
                video: result[0].dataValues.videoURL,
                audio: result[0].dataValues.audioURL,
                medium: result[0].dataValues.medium,
                created: result[0].dataValues.created_date,
                beaconID: result[0].dataValues.beaconID
            };*/