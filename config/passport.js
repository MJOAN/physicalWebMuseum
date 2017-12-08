var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  db.User.find({where:  {user.id}}).success(function(user){
    done(null, user);
  }).error(function(err){
    done(err, null)
  });
});

passport.use(new LocalStrategy(

  function(email, password, done) {
    // When a user tries to sign in this code runs
    db.User.find({ where: { email: email }}).success(function(user) {
      passwd = user ? user.password : " "
      isMatch = db.User.validPassword(password, passwd, done, user)
    }); 
  }
));


module.exports = passport;
