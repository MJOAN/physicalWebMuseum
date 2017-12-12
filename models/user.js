const bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING/*,
      allowNull: false,
      validate: {
          isEmail: true
        }*/
    }, 
    password: {
      type: DataTypes.STRING/*,
      allowNull: false,
      validate: {notEmpty: true, min: 6}*/
    }
  });

  //User.sync();
/*
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
*/
  return User;
};


