const express = require("express");
const db = require("../models");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');

router.post("/signup", function(req, res, next){
    console.log(req.body.email);
    db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(function(user) {
                if (!user) {
                    db.User.create({
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password)
                    }).then(function(user) {
                        passport.authenticate("local", { failureRedirect: "/", successRedirect: "/login" })(req, res, next)
                    })   } else {
          res.send("user is now signed up! Redirect to the settings page!");
          res.json(user);
    }
  })
})

router.post("/login", passport.authenticate('local', { 
  failureRedirect: '/signin',
  successRedirect: '/settings'
}));


router.get("/login", function(req, res) {

    // for you to play around with 

    // if authenticated 

    // db.User.findAll({
    //     where: {
    //         email: req.body.email
    //     }
    // }).then(dbUser => {

    //     hbsObject = {
    //         user: dbUser,
    //         pageTitle: 'Login Page',
    //         customCSS: './..',
    //         customJS: './javascript/login.js'
    //     }

    // })

  res.render("login", hbsObject);
});

router.get("/signup", function(req, res) {
    res.render("signup");
});

router.get("/logout", function(req, res) {
    req.logout();
    res.redirect('/login');
});

module.exports = router;