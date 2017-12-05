const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/artwork/:route", function(req, res) {
    db.Artwork.findAll({
        where: {
            route: req.params.route
        },
        include: [{
            model: db.Artist,
        }]

    }).then(artworks => {
            const resObj = artworks.map(artworks => {

               /* console.log(artworks._options.includeMap.Artist.attributes[1])
*/

                    return Object.assign({}, {
                            title: artworks.dataValues.title,
                            desc: artworks.dataValues.description,
                            img: artworks.dataValues.imgURL,
                            video: artworks.dataValues.videoURL,
                            audio: artworks.dataValues.audioURL,
                            medium: artworks.dataValues.medium,
                            created: artworks.dataValues.created_date,
                            beaconID: artworks.dataValues.beaconID,
                            name: artworks._options.includeMap.Artist.attributes.map(artists => {

                                console.log(artists)

                                    return Object.assign({}, {
                                            name: artists.dataValues.name
                                        }
                                    );
                            })
                    }); 
            });
            res.render("index", resObj);
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