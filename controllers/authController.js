const express = require("express");
const db = require("../models");
const router = express.Router();

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require('bcrypt-nodejs');
var logAuth;

router.post("/login", passport.authenticate('local', 
    { 
        successRedirect: '/settings', 
        failureRedirect: '/settings'
    }));

router.get("/login", function(req, res) {
    res.render("login");
    console.log("login")
});

router.post("/signup", function(req, res, next) {
    console.log(req.body.email);
    console.log("hello", "promise to settings redirect")
    console.log("route post working")
    db.User.findOne({
        where: {
            email: req.body.email
        }
        }).then(function(email) {
            console.log(email, "test here line 25")
            if (!email) {
                db.User.create({
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password)
            }).then(function(user) {
                res.send({redirect: "/settings" });
            }).catch(function(err) {
                res.json(err);
                });
            } else {
                 console.log("promise to settings redirect")
                res.send({redirect: "/settings" });
            }
        });
    });

router.get("/signup", function(req, res){
    console.log("signup")
    res.render("signup");
});

router.get("/logout", function(req, res) {
    req.logout();
    res.redirect('/');
});


/*router.get('/settings', ensureAuthenticated, function(req, res) {
  res.send("access granted. secure stuff happens here");
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next(); }
  res.redirect('/')
}*/



module.exports = router;