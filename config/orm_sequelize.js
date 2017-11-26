
var connection = require("../config/connection.js");


var orm_sequelize = {

/*  allNames: function(callback) {
    var s = "SELECT * FROM " + exhibit;

    connection.query(s, function(err, result) {
      callback(result);
    });
  },

  searchName: function(name, callback) {
    var s = "select * from " + exhibit + " where name=?";

    connection.query(s, [name], function(err, result) {
      callback(result);
    });
  },
*/
};

module.exports = orm_sequelize;
