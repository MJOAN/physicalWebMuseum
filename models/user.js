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



/*      
later we can add -->
  firstname: {
      type: Sequelize.STRING,
      notEmpty: true
  },
  lastname: {
      type: Sequelize.STRING,
      notEmpty: true
  },
  username: {
      type: Sequelize.TEXT
  },
  last_login: {
      type: Sequelize.DATE
  },
  status: {
      type: Sequelize.ENUM('active', 'inactive'),
      defaultValue: 'active'
  }
  */