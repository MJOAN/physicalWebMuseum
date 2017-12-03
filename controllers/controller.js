
const express = require("express");
const db = require("../models");
const router = express.Router();
// var res.locals.metaTags;/

router.get("/livingworld", function(req, res) {
   db.Artwork.findAll({
        where: {
            artwork_id: req.body.artwork_id
          }
        })
        .then(function(result) {

            var hbsObject = {
                artwork_id: result[0].dataValues.artwork_id,
                title: result[0].dataValues.title,
                desc: result[0].dataValues.description,
                img: result[0].dataValues.imgURL,
                medium: result[0].dataValues.medium,
                feedback: result[0].dataValues.feedback,
                created: result[0].dataValues.created_date,
                beaconID: result[0].dataValues.beaconID
            };
            res.render("index", hbsObject);
        });
      });


router.get("/abbotkinney", function(req, res) {
    db.Artwork.findAll({
        where: {
            artwork_id: req.body.artwork_id
          }
        })
        .then(function(result) {

            var hbsObject = {
                artwork_id: result[0].dataValues.artwork_id,
                title: result[0].dataValues.title,
                desc: result[0].dataValues.description,
                img: result[0].dataValues.imgURL,
                medium: result[0].dataValues.medium,
                feedback: result[0].dataValues.feedback,
                created: result[0].dataValues.created_date,
                beaconID: result[0].dataValues.beaconID
            };
            res.render("index", hbsObject);
        });
      });


router.post("/livingworld", function(req, res) {

    console.log("Feedback:");
    console.log(req.body);

    db.Feedback.create({
        feedback: req.body.feedback,
        created_at: req.body.date
    }).then(function(results) {
        console.log(results);
        res.json(results);
    });
});

router.post("/abbotkinney", function(req, res) {

    console.log("Feedback:");
    console.log(req.body);

    db.Feedback.create({
        feedback: req.body.feedback,
        created_at: req.body.date
    }).then(function(results) {
        console.log(results);
        res.json(results);
    });
});


module.exports = router;
