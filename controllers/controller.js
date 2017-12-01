const client = require('../config/keys.js');
const express = require("express");
const router = express.Router();

const Exhibit = require("../models/exhibit.js");

// const client = require('../../config/keys.js');
// var res.locals.metaTags;/
var meta;

router.get("/", function(req, res) {

    Exhibit.table1.findAll({})
        .then(function(result) {

            // console.log(result[0].dataValues);

            var hbsObject = {
                name: result[0].dataValues.name,
                title: result[0].dataValues.title,
                desc: result[0].dataValues.description,
                img: result[0].dataValues.imgURL,
                medium: result[0].dataValues.medium,
                created: result[0].dataValues.created_date
            };

            res.render("index", hbsObject);

        });

});

// console.log('Outside route ' + meta);

router.get("/api/tweets", function(req, res) {

    // search by #
    // ======================
    // var query = {
    //     q: '#vangogh',
    //     count: 1
    // };

    // 'search/tweets' with query passed into the get request

    var params = {
        screen_name: 'roberroberbill',
        count: 1
    }

    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (error) {
            throw error
        } else {

            for (i = 0; i < tweets.length; i++) {

                // console.log(tweets[i]);

                // image: tweets.[i].user.profile_image_url_https

                var result = {
                    twitterHandle: tweets[i].user.screen_name,
                    actualText: tweets[i].text,
                    time: tweets[i].created_at,
                    image: tweets[i].entities.media[0].media_url_https
                };

                // console.log(result);

                res.locals.metaTags = {
                    site: '@' + result.twitterHandle,
                    title: 'something',
                    desc: result.actualText,
                    image: result.image
                }

                meta = res.locals.metaTags;

                // console.log(meta);

                res.json(result);

            }

        }

    });

});

// console.log('Outside route but later on ' + meta);


module.exports = router;