// const client = require('../config/keys.js');
const express = require("express");
const db = require("../models");
const router = express.Router();

// const Exhibit = require("../models/exhibit.js");

// const client = require('../../config/keys.js');
// var res.locals.metaTags;/
// var meta;

router.get("/", function(req, res) {

    db.livingWorld.findAll({})
        .then(function(result) {

            // console.log(result[0].dataValues);

            var hbsObject = {
                name: result[0].dataValues.name,
                title: result[0].dataValues.title,
                desc: result[0].dataValues.description,
                img: result[0].dataValues.imgURL,
                medium: result[0].dataValues.medium,
                created: result[0].dataValues.created_date,
                beaconID: result[0].dataValues.beaconID

            };

            res.render("index", hbsObject);

        });

});

module.exports = router;