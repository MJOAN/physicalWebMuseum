var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { notNull: true, notEmpty: true, isEmail: true } },
        password: { type: DataTypes.STRING, allowNull: false, validate: { notNull: true, notEmpty: true } },
        {
          classMethods: {
              validPassword: function(password, passwd, done, user) {
                  bcrypt.compare(password, passwd, function(err, isMatch) {
                      if (err) console.log(err)
                      if (isMatch) {
                          return done(null, user)
                      } else {
                          return done(null, false)
                      }
                  });
                }
              }
            },
              {
                dialect: 'mysql'
              }
        });

    User.hook("beforeCreate", function(user, fn) {
        var salt = bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
            return salt;
        });
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            return fn(null, user)
        });
    });
    
    return User;
  }


// this is saying hey, before you create or after validate HOOK to work with data prior to being saved in DB; 
// so this is saying we want to everytime a user is created -- HASH their password
// salt is a work factor of 12 - hash has bfactor of 12; set user password to hash and return it
/*
// Creating a custom method for our User model. This will check if an 
// unhashed password entered by the user can be compared to the hashed password stored in our database
User.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
User.hook("beforeCreate", function(user) {
  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
});
return User;
};
*/