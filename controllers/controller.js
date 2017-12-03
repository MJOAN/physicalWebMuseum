
const express = require("express");
const db = require("../models");
const router = express.Router();
// var res.locals.metaTags;/

router.get("/livingworld", function(req, res) {

    db.Artwork.findAll({})   // find all where artwork ID === 
        .then(function(result) {

            console.log(result);

            var hbsObject = {
                name: result[0].dataValues.name,
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

    db.AbbotKinney.findAll({})   // find all where artwork ID === 
        .then(function(result) {

            console.log(result);

            var hbsObject = {
                name: result[0].dataValues.name,
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

    db.LivingWorld.create({
        feedback: req.body.body.feedback
        // created_at: req.body.created_at
    }).then(function(results) {
        // `results` here would be the newly created chat
        res.end();
    });
});

router.post("/abbotkinney", function(req, res) {

    console.log("Feedback:");
    console.log(req.body);

    db.AbbotKinney.create({
        feedback: req.body.feedback
        // created_at: req.body.created_at
    }).then(function(results) {
        // `results` here would be the newly created 
        console.log(results);
        res.json(results);
        // res.end();
    });
});


module.exports = router;
