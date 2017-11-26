
var connection = require("./connection.js");
var exhibit = "exhibit";

var orm = {

  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  allNames: function(callback) {
    var s = "SELECT * FROM " + exhibit;

    connection.query(s, function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method for performing a query of a single character in the table.
  // Again, we make use of the callback to grab a specific character from the database.
  searchName: function(name, callback) {
    var s = "select * from " + exhibit + " where name=?";

    connection.query(s, [name], function(err, result) {
      callback(result);
    });
  },


};

module.exports = orm;
