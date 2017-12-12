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

  function(email, password, done) {
    db.User.find({ where: { email: email }}).success(function(user) {
      passwd = user ? user.password : " "
      isMatch = db.User.validPassword(password, passwd, done, user)
    }); 
  }
));


/*passport.use(new Strategy(function(username, pass, cb){
  var hashedPass = bcrypt.hashSync(pass)
  User.findOne({
    where: {
      username: username
    }
  }).then(function(user, err){
    if (err) { return cb(err); }
    if (!user) { 
    return cb(null, false); }
    if (!bcrypt.compareSync(pass, user.password)){ 
      return cb(null, false); }
    return cb(null, user);
  })
}))*/

module.exports = passport;