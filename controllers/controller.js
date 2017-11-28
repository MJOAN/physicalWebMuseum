
var express = require("express");
var router = express.Router();

var Exhibit = require("../models/exhibit.js");

router.get("/", function(req, res) {
  
  Exhibit.findAll({})
        .then(function(result) {

       	console.log(result[0].dataValues);

    var hbsObject = {
      name: result[0].dataValues.name,
      title: result[0].dataValues.title,
      desc: result[0].dataValues.description,
      img: result[0].dataValues.imgURL,
      medium: result[0].dataValues.medium,
      created: result[0].dataValues.created_date
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });

});


module.exports = router;
