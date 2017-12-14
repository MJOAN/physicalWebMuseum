const express = require("express");
const db = require("../models");
const router = express.Router();

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require('bcrypt-nodejs');

router.post("/login", passport.authenticate('local', { 
  failureRedirect: '/',
  successRedirect: '/settings'
}))

router.post("/signup", function(req, res, next) {
 console.log(req.body.email);
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
            }).catch(function(err) {
                res.json(err);
                });
            } else {
                 console.log("hello", email, "promise to settings redirect")
                res.send({redirect: "/settings" });
            }
        });
    });


router.get("/login", function(req, res) {
    res.render("login");
    console.log("login")
});


/*router.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/members");
    }  
    else {
    db.User.findAll({
        where: {
            email: req.body.email
        }
    }).then(dbUser => {
        uidObj = {
            email: dbUser,
            pageTitle: 'Login Page',
            customCSS: './..',
            customJS: './javascript/login.js'
        }
    res.send("login", uidObj);
  });
*/

router.get("/signup", function(req, res){
    console.log("signup")
    res.render("signup");

});

router.get("/logout", function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get("/profile", function(req, res) {    
    function logAuth(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.direct('/profile', { email: req.email });
    }
    logAuth(req,res);
};

});

module.exports = router;