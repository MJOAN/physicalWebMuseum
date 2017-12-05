
const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/artwork/:title", function(req, res) {
   db.Artwork.findAll({
        where: {
            title: req.params.title
          }
        })
        .then(function(result) {
            console.log(result);
            var hbsObject = {
                id: result[0].dataValues.id,
                title: result[0].dataValues.title,
                desc: result[0].dataValues.description,
                img: result[0].dataValues.imgURL,
                video: result[0].dataValues.videoURL,
                audio: result[0].dataValues.audioURL,
                medium: result[0].dataValues.medium,
                created: result[0].dataValues.created_date,
                beaconID: result[0].dataValues.beaconID
            };
            res.render("index", hbsObject);
        });
      });



module.exports = router;
