var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  db.User.find({where:  {id}}).success(function(user){
    done(null, user);
  }).error(function(err){
    done(err, null)
  });
});

passport.use(new LocalStrategy(
  {
    usernameField: "email",
    passwordField : "password"
  },
  function(email, password, done) {
    db.User.findOne({ where: { email: email }}).success(function(user) {
      passwd = user ? user.password : " "
      isMatch = db.User.validPassword(password, passwd, done, user)
    }); 
  }
));



module.exports = passport;