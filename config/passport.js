const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");
const bcrypt = require('bcrypt-nodejs');

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
    passwordField : "password",
    passReqToCallback : true // whole request goes to cb
  },

  function(email, password, done) {
    db.User.find({
      where: {
        email: email
      }
    }).then(function (user) {
      if (user == null) {
        return done(null, false, { message: 'Incorrect credentials.' })
      } 
      var hashedPassword = bcrypt.hashSync(password, user.salt)

      if (user.password === hashedPassword) {
        return done(null, user)
      }
      return done(null, false, { message: 'Incorrect credentials.' })
    })
  }
))

module.exports = passport;