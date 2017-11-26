
var express = require("express");
var router = express.Router();

var Exhibit = require("../models/exhibit.js");

router.get("/", function(req, res) {
  
  Exhibit.findAll({})
        .then(function(result) {
    var hbsObject = {
      exhibit: result
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });

});


module.exports = router;
