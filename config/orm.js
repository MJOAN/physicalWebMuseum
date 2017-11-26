
var connection = require("./config/connection.js");
var exhibit = "exhibit";

var orm = {

  allNames: function(callback) {
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

};

module.exports = orm;
