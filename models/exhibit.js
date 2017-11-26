
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates "Exhibit" model that matches up with DB
var Exhibit = sequelize.define("exhibit", {
  name: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  created_date: {
    type: Sequelize.INTEGER
  },
  medium: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.BLOB
  }
}, {
  timestamps: false
});

// Syncs with DB
Exhibit.sync();

// Makes the Exhibit Model available for other files 
module.exports = Exhibit;
