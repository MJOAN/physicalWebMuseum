const express = require("express");
const db = require("../models");
const router = express.Router();

// ======================================================
// Root: Landing Page
router.get("/", function(req, res) {

    hbsObject = {
        pageTitle: 'Home Page',
        customCss: './css/homePage.css'
    }

    res.render("landingPage", hbsObject);
});
// ======================================================

module.exports = router;