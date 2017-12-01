// const client = require('../config/keys.js');
const express = require("express");
const db = require("../models");
const router = express.Router();

// const Exhibit = require("../models/exhibit.js");

// const client = require('../../config/keys.js');
// var res.locals.metaTags;/
// var meta;

// module.exports = function() {

router.get("/livingworld", function(req, res) {

    db.livingWorld.findAll({})
        .then(function(result) {

            // console.log(result[0].dataValues);

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

    db.abbotKinney.findAll({})
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

    console.log("Chat:");
    console.log(req.body);

    db.livingWorld.create({
        feedback: req.body.body.feedback,
        created_at: req.body.created_at
    }).then(function(results) {
        // `results` here would be the newly created chat
        res.end();
    });
});

router.post("/abbotkinney", function(req, res) {

    console.log("Chat:");
    console.log(req.body);

    db.Abbotkinney.create({
        feedback: req.body.body.feedback,
        created_at: req.body.created_at
    }).then(function(results) {
        // `results` here would be the newly created chat
        res.end();
    });
});



// }

module.exports = router;