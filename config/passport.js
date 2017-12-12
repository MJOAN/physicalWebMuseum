const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");
const bcrypt = require('bcrypt-nodejs');



passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email"
  },
  function(username, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      where: {
        email: email
      }
    }).then(function(dbUser) {
      // If there's no user with the given username
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given username, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));


passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;